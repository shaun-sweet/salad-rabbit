import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
import './index.css';
=======
import Contact from './Contact';
import Accounts from './Accounts';
import Budget from './Budget';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'

import './css/index.css';
>>>>>>> 19d66a8d0042f1ea9f3fc6630242e096d44aa007

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
