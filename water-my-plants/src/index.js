import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD

import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>,
=======
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
>>>>>>> d29322657fb1a52878a7bb26c2cd6f3e2963c1ce
  document.getElementById('root')
);

