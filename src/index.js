import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import AccountsView from './components/Views/AccountsView'
import BudgetView from './components/Views/BudgetView'
import Layout from './components/Layout'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={BudgetView}/>
        <Route path="accounts" component={AccountsView} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
