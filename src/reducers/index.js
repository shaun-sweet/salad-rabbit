import { combineReducers } from 'redux'

import accounts from './accountsReducer'
import transactions from './transactionsReducer'
import categories from './categoriesReducer'

export default combineReducers({
  accounts,
  transactions,
  categories
})
