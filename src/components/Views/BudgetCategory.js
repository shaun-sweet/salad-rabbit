import React, { Component } from 'react'
import '../../styles/BudgetCategory.css'
import BudgetSubcategory from './BudgetSubcategory'
import AddBudgetSubcategory from './AddBudgetSubcategory'

export default class BudgetCategory extends Component {

  render() {
    return (
      <div className="budget-category-container">
        <div className="budget-category">
          <div className="master-category column">
          	{this.props.master_category}
            <AddBudgetSubcategory index={this.props.index}/>
         	</div>
         	<div className="budget column">
          	{this.props.total_budgeted}
         	</div>
         	<div className="outflows column">
         		{this.props.total_outflows}
         	</div>
         	<div className="balance column">
         		{this.props.total_balance}
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