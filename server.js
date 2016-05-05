'use strict';
const express = require('express');
const path = require('path');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.static('build'))
   .use(cookieParser());

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.get('/test', (req, res) => {
  res.status(200).json({ hello: 'hello' });
});

const generateRandomString = (length) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

app.get('/login', (req, res) => {
  const stateKey = 'spotify_auth_state';
  const state = generateRandomString(16);
  const clientId = '863ebd6199cb4209bb893e90561667b6';
  const redirectUri = 'http://localhost:3000/test';

  res.cookie(stateKey, state);

  const scope = 'user-read-private user-read-email';
  const url = `https://accounts.spotify.com/authorize?${querystring.stringify({
    response_type: 'code',
    client_id: clientId,
    scope,
    redirect_uri: redirectUri,
    state,
  })}`;
  res.redirect(url);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
