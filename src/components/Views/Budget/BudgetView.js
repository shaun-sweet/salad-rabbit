import React, { Component } from 'react'
import BudgetHeader from './BudgetHeader'
import BudgetCategoriesContainer from './BudgetCategoriesContainer'
import { connect } from 'react-redux'

var mapStateToProps = function(store) {
  return {
    categories: store.categories,
    accounts: store.accounts,
    openAccounts: store.openAccounts,
    masterCategories: store.masterCategories,
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
    let masterCategories = this.props.masterCategories;
    return Object.keys(masterCategories).map((masterCategoryId)=>{
      return {...masterCategories[masterCategoryId], categories: masterCategories[masterCategoryId].categories.map((categoryId)=>
        this.props.categories[categoryId])};
    })
  }

  denormalizeOpenAccounts() {
    return this.props.openAccounts.map((accountId, index) => {
      return this.props.accounts[accountId];
    });
  }
}

module.exports = connect(mapStateToProps)(BudgetView);
