import React, { Component } from 'react'
import BudgetHeader from './BudgetHeader'
import BudgetCategoriesContainer from './BudgetCategoriesContainer'
import AddBudgetCategory from './AddBudgetCategory'
import { connect } from 'react-redux'

var mapStateToProps = function(store) {
  return {
    categories: store.categories
  };
}

export default class BudgetView extends Component {

  render() {
    return (
      <div id="budget">
        <BudgetHeader/>
        <AddBudgetCategory/>
        <BudgetCategoriesContainer categories={this.props.categories}/>
      </div>
    );
  }
}

module.exports = connect(mapStateToProps)(BudgetView);