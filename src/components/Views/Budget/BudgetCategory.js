import React, { Component } from 'react'
import BudgetSubcategory from './BudgetSubcategory'
import AddBudgetSubcategory from './AddBudgetSubcategory'
import {usd} from '../../../helpers/index'

export default class BudgetCategory extends Component {

  render() {
    //total all budgeted columns
    const budgeted = this.props.subcategories.reduce((accumulator, element)=> accumulator + parseInt(element.budgeted, 10), 0);
    //total all outflows columns
    const outflows = this.props.subcategories.reduce((accumulator, element)=> accumulator + parseInt(element.outflow, 10), 0);

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
