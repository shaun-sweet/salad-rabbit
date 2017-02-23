import React, { Component } from 'react'
import '../../styles/BudgetCategory.css'

export default class BudgetCategory extends Component {

  render() {
  	console.log(this.props);
    return (
      <div className="budget-category">
        <div className="master-category column">
        	{this.props.master_category}
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
    );
  }
}