import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'
const middleware = applyMiddleware(thunk, logger())
export default createStore(reducers, middleware);

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
  categories: [
    {
      master_category: "Monthly Bills",
      total_budgeted: 0,
      total_outflows: 0,
      total_balance: 0,
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
