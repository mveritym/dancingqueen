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
import login from './login';

const app = express();
app.use(express.static('build'))
   .use(cookieParser());

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.status(200).send(renderPage(renderToString(<RouterContext {...renderProps} />)))
    } else if (req.url === '/login') {
      login(req, res);
    } else {
      res.status(404).send('Not found')
    }
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
