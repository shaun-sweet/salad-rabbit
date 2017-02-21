import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Accounts from './components/Accounts'
import Layout from './components/Layout'
import Budget from './components/Budget'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Budget}/>
        <Route path="accounts" component={Accounts} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
