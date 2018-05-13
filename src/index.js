import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);

/* I forget the name of the repo I referenced for file structure but it was very helpful. The layout was very similar with file structure and elegantly done. */