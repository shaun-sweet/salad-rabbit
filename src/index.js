import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import TransactionView from './components/Views/Transactions/TransactionView'
import BudgetView from './components/Views/Budget/BudgetView'
import Layout from './components/Layout'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={BudgetView}/>
        <Route path="accounts/:id" component={TransactionView} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
