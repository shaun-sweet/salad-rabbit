import React, { Component } from 'react'
import BudgetHeader from './BudgetHeader'
import BudgetCategoriesContainer from './BudgetCategoriesContainer'
import { connect } from 'react-redux'
import { sumArray } from '../../../helpers/index'

var mapStateToProps = function(store) {
  return {
    categories: store.categories,
    accounts: store.accounts,
    openAccounts: store.openAccounts,
    masterCategories: store.masterCategories,
    transactions: store.transactions
  };
}

export default class BudgetView extends Component {

  render() {
    let denormalizedCategories = this.denormalizeCategories();
    return (
      <div id="budget-view">
        <BudgetHeader accounts={this.denormalizeOpenAccounts()} master_categories={denormalizedCategories}/>
        <BudgetCategoriesContainer dispatch={this.props.dispatch} master_categories={denormalizedCategories}/>
      </div>
    );
  }

  denormalizeCategories(){
    //denormalize to add category information to master categories as well as calculate total outflows from transactions
    let masterCategories = this.props.masterCategories;
    return Object.keys(masterCategories).map((masterCategoryId)=>{
      return {...masterCategories[masterCategoryId], categories: masterCategories[masterCategoryId].categories.map((categoryId)=>{
        return {
          ...this.props.categories[categoryId],
          outflow: sumArray(this.props.categories[categoryId].outflows.map((transactionId)=> this.props.transactions[transactionId].outflow), (elem) => elem )
          }
        }
      )};
    })
  }

  denormalizeOpenAccounts() {
    return this.props.openAccounts.map((accountId, index) => {
      return this.props.accounts[accountId];
    });
  }
}

module.exports = connect(mapStateToProps)(BudgetView);
