import React, { Component } from 'react'
import '../../styles/BudgetView.css'
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
      <div id="budget-view">
        <BudgetHeader categories={this.props.categories}/>
        <AddBudgetCategory/>
        <BudgetCategoriesContainer categories={this.props.categories}/>
      </div>
    );
  }
}

module.exports = connect(mapStateToProps)(BudgetView);