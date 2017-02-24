import React, { Component } from 'react'
import BudgetSubcategory from './BudgetSubcategory'
import AddBudgetSubcategory from './AddBudgetSubcategory'
import {usd, sumArray} from '../../../helpers/index'

export default class BudgetCategory extends Component {

  render() {
    //total all budgeted columns
    const budgeted = sumArray(this.props.subcategories, (item) => item.budgeted);
    //total all outflows columns
    const outflows = sumArray(this.props.subcategories, (item) => item.outflow);

    return (
      <div className="budget-category-container">
        <div className="budget-category">
          <div className="master-category column">
          	{this.props.master_category}
            <AddBudgetSubcategory index={this.props.index}/>
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
        {this.subcategoriesList()}
      </div>
    );
  }

  subcategoriesList() {
    return this.props.subcategories.map((subcategory, index) => <BudgetSubcategory {...subcategory} indexParent={this.props.index} index={index} key={index}/>);
  }
}
