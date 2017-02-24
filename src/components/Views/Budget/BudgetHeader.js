import React, { Component } from 'react'

export default class BudgetHeader extends Component {

  render() {
    //total all available funds
    const accounts = this.props.accounts.reduce((accumulator, element)=> accumulator + parseInt(element.balance), 0);
    //total all budgeted columns
    const budgeted = this.props.categories.reduce((accumulator, element)=> accumulator + element.subcategories.reduce((acc, elem)=>acc + parseInt(elem.budgeted), 0), 0);
    //total all outflows columns
    const outflows = this.props.categories.reduce((accumulator, element)=> accumulator + element.subcategories.reduce((acc, elem)=>acc + parseInt(elem.outflow), 0), 0);
    return (
      <div id="budget">
        <div id="available-to-budget">
        	Available to Budget: {accounts - budgeted}
        </div>
        <div className="budget-columns">
        	<div id="budgeted">
	        	Budgeted: {budgeted}
	        </div>
        	<div id="outflows">
        		Outflows:{outflows}
        	</div>
        	<div id="balance">
        		Balance: {budgeted-outflows}
        	</div>
	    </div>
      </div>
    );
  }
}