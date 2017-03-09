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
    console.log(this.denormalizeCategories());
    return (
      <div id="budget-view">
        <BudgetHeader accounts={this.props.accounts} master_categories={this.props.categories}/>
        <BudgetCategoriesContainer master_categories={this.props.categories}/>
      </div>
    );
  }

  denormalizeCategories(){
    let masterCategories = this.props.masterCategories;
    Object.keys(masterCategories).map((masterCategoryId)=>{
      console.log(masterCategories[masterCategoryId]);
      return {...masterCategories[masterCategoryId], categories: masterCategories[masterCategoryId].categories.map((categoryId)=> this.props.categories[categoryId])};
    })
  }
}

module.exports = connect(mapStateToProps)(BudgetView);
