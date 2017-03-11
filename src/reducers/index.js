import { combineReducers } from 'redux'

import accounts from './accountsReducer'
import transactions from './transactionsReducer'
import categories from './categoriesReducer'
import accountsIdGenerator from './accountsIdGeneratorReducer'
import categoryIdGenerator from './categoryIdGeneratorReducer'
import masterCategoryIdGenerator from './masterCategoryIdGeneratorReducer'
import transactionsIdGenerator from './transactionsIdGeneratorReducer'
import masterCategories from './masterCategoriesReducer'
import openAccounts from './openAccountsReducer'
import closedAccounts from './closedAccountsReducer'

export default combineReducers({
  accountsIdGenerator,
  transactionsIdGenerator,
  masterCategoryIdGenerator,
  categoryIdGenerator,
  masterCategories,
  accounts,
  transactions,
  categories,
  closedAccounts,
  openAccounts
})
