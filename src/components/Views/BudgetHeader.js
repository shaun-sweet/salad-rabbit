import React, { Component } from 'react'

export default class BudgetHeader extends Component {

  render() {
    //total all budgeted columns
    const budgeted = this.props.categories.reduce((accumulator, value)=> accumulator + value.total_budgeted, 0);
    //total all outflows columns
    const outflows = this.props.categories.reduce((accumulator, value)=> accumulator + value.total_outflows, 0);
    return (
      <div id="budget">
        <div id="available-to-budget">
        	Available to Budget:
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