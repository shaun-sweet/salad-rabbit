import React, { Component } from 'react'
import AddBudgetCategory from './AddBudgetCategory'
import {usd, sumArray} from '../../../helpers/index'

export default class BudgetHeader extends Component {

  render() {
    //total all available funds
    const accounts = sumArray(this.props.accounts, (item) => item.balance);
    //total all budgeted columns
    const budgeted = sumArray(this.props.categories, (item) => sumArray(item.subcategories, (subitem)=> subitem.budgeted));
    //total all outflows columns
    const outflows = sumArray(this.props.categories, (item) => sumArray(item.subcategories, (subitem)=> subitem.outflow));

    return (
      <div id="budget">
        <div id="available-to-budget">
        	Available to Budget: {usd(accounts - budgeted)}
        </div>
        <div className="budget-row">
            <div id="category-name" className="budget-columns">
                
                Master Categories 
                <AddBudgetCategory/>
        
            </div>
        	<div id="budgeted" className="budget-columns">
	        	Budgeted: {usd(budgeted)}
	        </div>
        	<div id="outflows" className="budget-columns">
        		Outflows: {usd(outflows)}
        	</div>
        	<div id="balance" className="budget-columns">
        		Balance: {usd(budgeted - outflows)}
        	</div>
	    </div>
      </div>
    );
  }
}