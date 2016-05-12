'use strict';
import express from 'express';
import path from 'path';
import querystring from 'querystring';
import cookieParser from 'cookie-parser';

import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server'
import routes from '../app/routes';
import renderPage from './renderer';

const app = express();
app.use(express.static('build'))
   .use(cookieParser());

const login = (req, res) => {
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
};

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.status(200).send(renderPage(renderToString(<RouterContext {...renderProps} />)))
    } else if (req.url === '/login') {
      console.log('LOGGING IN');
      login(req, res);
    } else {
      res.status(404).send('Not found')
    }
  });
});

const generateRandomString = (length) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
