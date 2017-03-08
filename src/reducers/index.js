import { combineReducers } from 'redux'

import accounts from './accountsReducer'
import transactions from './transactionsReducer'
import categories from './categoriesReducer'
import accountsIdGenerator from './accountsIdGeneratorReducer'
import categoryIdGenerator from './categoryIdGeneratorReducer'
import masterCategoryIdGenerator from './masterCategoryIdGeneratorReducer'
import transactionsIdGenerator from './transactionsIdGeneratorReducer'
import masterCategory from './masterCategoryReducer'
import openAccounts from './openAccountsReducer'
import closedAccounts from './closedAccountsReducer'

export default combineReducers({
  accountsIdGenerator,
  transactionsIdGenerator,
  masterCategoryIdGenerator,
  categoryIdGenerator,
  masterCategory,
  accounts,
  transactions,
  categories,
  closedAccounts,
  openAccounts
})
