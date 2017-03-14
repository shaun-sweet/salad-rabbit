import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'
const middleware = applyMiddleware(thunk, logger())
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducers, composeEnhancers(middleware));

// is just to see the data model, it really does nothing
// eslint-disable-next-line
let r = {
  accountsIdGenerator: 1,
  transactionsIdGenerator: 1,
  masterCategoryIdGenerator: 1,
  categoryIdGenerator: 1,
  transactions: {
    "1": {
      id: 1,
      account: 1,
      date: Date.now,
      payee: "Sprint",
      category: 2,
      memo: "twas cellphoney",
      outflow: 90.05,
      inflow: null,
      cleared: true
    }
  },
  masterCategories: {
    "1": {
      id: 1,
      name: "Monthly Bills",
      categories: [1,2],
      hidden: false
    }
  },
  categories: {
    "1": {
      id: 1,
      masterCategory: 1,
      name: "Rent",
      budgeted: 500,
      outflows: [],
      outflow: 0,
      inflow: 0,
      balance: 0,
      hidden: false
    },
    "2": {
      id: 2,
      masterCategory: 1,
      name: "Cell Phone",
      budgeted: 100.23,
      outflows: [1],
      outflow: 0,
      inflow: 0,
      balance: 0,
      hidden: false
    }
  },
  accounts: {
    "1": {
      id: 1,
      name: "Checking",
      type: "checking",
      balance: 100000,
      note: "string",
      open: true
    }
  },
  closedAccounts: [],
  openAccounts: [1]
}
