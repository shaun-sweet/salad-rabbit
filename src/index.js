import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Contact from './Contact';
import Accounts from './Accounts';
import Budget from './Budget';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'

import './css/index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/budget" />
      <Route path="budget" component={Budget} />
      <Route path="accounts" component={Accounts} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById('root')
);
