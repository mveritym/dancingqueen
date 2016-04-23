import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Test from './Test';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send(
    renderToString(<Test />)
  );
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
