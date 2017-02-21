import { combineReducers } from 'redux'

import accounts from './accountsReducer'
import transactions from './transactionsReducer'

export default combineReducers({
  accounts,
  transactions
})
