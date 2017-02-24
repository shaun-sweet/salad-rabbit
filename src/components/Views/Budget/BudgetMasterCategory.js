import React, { Component } from 'react'
import BudgetCategory from './BudgetCategory'
import AddBudgetCategory from './AddBudgetCategory'
import {usd, sumArray} from '../../../helpers/index'

export default class BudgetMasterCategory extends Component {

  render() {
    //total all budgeted columns
    const budgeted = sumArray(this.props.categories, (item) => item.budgeted);
    //total all outflows columns
    const outflows = sumArray(this.props.categories, (item) => item.outflow);

    return (
      <div className="budget-master-category-container">
        <div className="budget-master-category">
          <div className="master-category column">
          	{this.props.name}
            <AddBudgetCategory index={this.props.index}/>
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
    return this.props.categories.map((category, index) => <BudgetCategory {...category} indexParent={this.props.index} index={index} key={index}/>);
  }
}
