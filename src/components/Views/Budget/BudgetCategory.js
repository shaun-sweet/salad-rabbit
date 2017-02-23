import React, { Component } from 'react'
import '../../../styles/BudgetCategory.css'
import BudgetSubcategory from './BudgetSubcategory'
import AddBudgetSubcategory from './AddBudgetSubcategory'

export default class BudgetCategory extends Component {

  render() {
    //total all budgeted columns
    const budgeted = this.props.subcategories.reduce((accumulator, element)=> accumulator + element.budgeted, 0);
    //total all outflows columns
    const outflows = this.props.subcategories.reduce((accumulator, element)=> accumulator + element.outflow, 0);

    return (
      <div className="budget-category-container">
        <div className="budget-category">
          <div className="master-category column">
          	{this.props.master_category}
            <AddBudgetSubcategory index={this.props.index}/>
         	</div>
         	<div className="budget column">
          	{budgeted}
         	</div>
         	<div className="outflows column">
         		{outflows}
         	</div>
         	<div className="balance column">
         		{budgeted-outflows}
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
