import React, { Component } from 'react'
import BudgetHeader from './BudgetHeader'
import BudgetCategoriesContainer from './BudgetCategoriesContainer'
import { connect } from 'react-redux'

var mapStateToProps = function(store) {
  return {
    categories: store.categories,
    accounts: store.accounts,
    masterCategories: store.masterCategories,
    dicks: 1
  };
}

export default class BudgetView extends Component {

  render() {
    let denormalizedCategories = this.denormalizeCategories();
    return (
      <div id="budget-view">
        <BudgetHeader accounts={this.props.accounts} master_categories={denormalizedCategories}/>
        <BudgetCategoriesContainer master_categories={denormalizedCategories}/>
      </div>
    );
  }

  denormalizeCategories(){
    let masterCategories = this.props.masterCategories;
    return Object.keys(masterCategories).map((masterCategoryId)=>{
      let masterCategory = masterCategories[masterCategoryId];
      masterCategory.categories = masterCategories[masterCategoryId].categories.map((categoryId)=> this.props.categories[categoryId]);
      return masterCategory;
    })
  }
}

module.exports = connect(mapStateToProps)(BudgetView);
