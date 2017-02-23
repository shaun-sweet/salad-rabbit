import React, { Component } from 'react'

export default class BudgetHeader extends Component {

  render() {
    return (
      <div id="budget">
        <div id="available-to-budget">
        	Available to Budget:
        </div>
        <div className="budget-columns">
        	<div id="budgeted">
	        	Budgeted:
	        </div>
        	<div id="outflows">
        		Outflows:
        	</div>
        	<div id="balance">
        		Balance:
        	</div>
	    </div>
      </div>
    );
  }
}