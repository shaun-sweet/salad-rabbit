import React, { Component } from 'react'
import AddBudgetMasterCategory from './AddBudgetMasterCategory'
import {usd, sumArray} from '../../../helpers/index'

export default class BudgetHeader extends Component {

  render() {
    //total all available funds
    const accounts = sumArray(this.props.accounts, (item) => item.balance);
    //total all budgeted columns
    const budgeted = sumArray(this.props.master_categories, (item) => sumArray(item.categories, (subitem)=> subitem.budgeted));
    //total all outflows columns
    const outflows = sumArray(this.props.master_categories, (item) => sumArray(item.categories, (subitem)=> subitem.outflow));

    return (
      <div id="budget">
        <div id="available-to-budget">
        	Available to Budget: {usd(accounts - budgeted)}
        </div>
        <div className="budget-row">
            <div id="master-category-name" className="budget-columns">
                
                Categories 
                <AddBudgetMasterCategory/>
        
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