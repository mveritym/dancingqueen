import React from 'react';
import { createElement, render } from 'react-dom';

render(
  createElement(<div>Hello</div>),
  document.getElementById('app')
);
