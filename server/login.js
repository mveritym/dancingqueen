import querystring from 'querystring';
import request from 'request';
import { CLIENT_SECRET } from '../.secrets';

const STATE_KEY = 'spotify_auth_state';
const CLIENT_ID = '863ebd6199cb4209bb893e90561667b6';
const AUTHORIZE_URI = 'https://accounts.spotify.com/authorize';
const ACCOUNTS_URI = 'https://accounts.spotify.com/api/token';
const REDIRECT_URI = 'http://localhost:3000/callback';

const scopes = [
  'playlist-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'user-library-read'
];

const generateRandomString = (length) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const login = (req, res) => {
  const state = generateRandomString(16);
  res.cookie(STATE_KEY, state);

  const url = `${AUTHORIZE_URI}?${querystring.stringify({
    response_type: 'code',
    client_id: CLIENT_ID,
    scope: scopes.join(' '),
    redirect_uri: REDIRECT_URI,
    state,
  })}`;
  res.redirect(url);
};

const accountsAuthSuccess = (res, body) => {
  const access_token = body.access_token;
  const refresh_token = body.refresh_token;
  res.redirect('/playlists?' +
    querystring.stringify({
      access_token: access_token,
      refresh_token: refresh_token
    }));
}

const onAccountsAuth = (res, error, response, body) => {
  if (!error && response.statusCode === 200) {
    accountsAuthSuccess(res, body);
  } else {
    res.redirect('/');
  }
}

export const loginCallback = (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[STATE_KEY] : null;

  if (state === null || state !== storedState) {
    res.redirect('/');
  }

  res.clearCookie(STATE_KEY);
  const authOptions = {
    url: ACCOUNTS_URI,
    form: {
      code: code,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code'
    },
    headers: { 'Authorization': 'Basic ' + (new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')) },
    json: true
  };

  request.post(authOptions, onAccountsAuth.bind(null, res));
};
