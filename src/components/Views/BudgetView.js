import React, { Component } from 'react'
import BudgetHeader from './BudgetHeader'
import BudgetCategories from './BudgetCategories'
import AddBudgetCategory from './AddBudgetCategory'

export default class BudgetView extends Component {

  render() {
    return (
      <div id="budget">
        <BudgetHeader/>
        <AddBudgetCategory/>
        <BudgetCategories/>
      </div>
    );
  }
}
