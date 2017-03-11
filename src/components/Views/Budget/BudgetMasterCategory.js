import React, { Component } from 'react'
import BudgetCategory from './BudgetCategory'
import AddBudgetCategory from './AddBudgetCategory'
import {usd, sumArray} from '../../../helpers/index'

export default class BudgetMasterCategory extends Component {

  render() {
    const budgeted = sumArray(this.props.master_category.categories, (item) => item.budgeted);
    const outflows = sumArray(this.props.master_category.categories, (item) => item.outflow);

    return (
      <div className="budget-master-category-container">
        <div className="budget-master-category">
          <div className="master-category column">
            {this.props.master_category.name}
            <AddBudgetCategory master_category={this.props.master_category} />
          </div>
          <div className="budget column">
            {usd(budgeted)}
          </div>
          <div className="outflows column">
            {usd(outflows)}
          </div>
          <div className="balance column">
            {usd(budgeted-outflows)}
          </div>
        </div>
        {this.categoriesList()}
      </div>
    );
  }

  categoriesList() {
    return this.props.master_category.categories.map((category, index) => <BudgetCategory category={{...category}} dispatch={this.props.dispatch} key={category.id}/>);
  }
}
