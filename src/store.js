import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'
const middleware = applyMiddleware(thunk, logger())
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducers, composeEnhancers(middleware));

// is just to see the data model, it really does nothing
// eslint-disable-next-line
var s = {
  closed_accounts: [
    {
      name: "Checking",
      type: "Checking",
      balance: 0,
      note: "String"
    }
  ],
  accounts: [
    {
      name: "Checking",
      type: "checking",
      balance: 100000,
      note: "String"
    },
    {
      name: "Credit Card",
      type: "credit card",
      balance: -100,
      note: "String"
    }
  ],
  transactions: [
    {
      account: "Checking",
      date: Date.now,
      payee: "Dominos",
      category: "Food",
      memo: "twas good",
      outflow: 30.05,
      inflow: null,
      cleared: true
    }
  ],
  master_categories: [
    {
      name: "Monthly Bills",
      categories: [
        {
          name: "Rent",
          budgeted: 500,
          outflow: 0,
          balance: 0
        }
      ]
    }
  ]
}

{
  transactions: {
    uniqueID: 0
    list:[{
      account: "Checking",
      date: Date.now,
      payee: "Dominos",
      category: "Food",
      memo: "twas good",
      outflow: 30.05,
      inflow: null,
      cleared: true
    }]
  }
}
