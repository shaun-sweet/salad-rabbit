import React, { Component } from 'react'
import AddBudgetCategory from './AddBudgetCategory'

export default class BudgetHeader extends Component {

  render() {
    //total all available funds
    const accounts = this.props.accounts.reduce((accumulator, element)=> accumulator + parseInt(element.balance, 10), 0);
    //total all budgeted columns
    const budgeted = this.props.categories.reduce((accumulator, element)=> accumulator + element.subcategories.reduce((acc, elem)=>acc + parseInt(elem.budgeted, 10), 0), 0);
    //total all outflows columns
    const outflows = this.props.categories.reduce((accumulator, element)=> accumulator + element.subcategories.reduce((acc, elem)=>acc + parseInt(elem.outflow, 10), 0), 0);
    return (
      <div id="budget">
        <div id="available-to-budget">
        	Available to Budget: {accounts - budgeted}
        </div>
        <div className="budget-row">
            <div id="category-name" className="budget-columns">
                
                Master Categories 
                <AddBudgetCategory/>
        
            </div>
        	<div id="budgeted" className="budget-columns">
	        	Budgeted: {budgeted}
	        </div>
        	<div id="outflows" className="budget-columns">
        		Outflows: {outflows}
        	</div>
        	<div id="balance" className="budget-columns">
        		Balance: {budgeted-outflows}
        	</div>
	    </div>
      </div>
    );
  }
}