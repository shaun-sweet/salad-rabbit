import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import AccountsTransactionView from './components/Views/Accounts/AccountsTransactionView'
import BudgetView from './components/Views/Budget/BudgetView'
import Layout from './components/Layout'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={BudgetView}/>
        <Route path="accounts" component={AccountsTransactionView} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
