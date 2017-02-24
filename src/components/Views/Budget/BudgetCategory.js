import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import { changeBudgetedAmount } from '../../../actions/categoriesActions'
import { connect } from 'react-redux'
import {usd} from '../../../helpers/index'


var mapStateToProps = function(store) {
  return {
    master_categories: store.master_categories
  };
}

export default class BudgetCategory extends Component {

  render() {
    return (
      <div className="budget-category">
        <div className="name column">
        	{this.props.name}
       	</div>
       	<div className="budget column">
        	<TextField
              id="budget-text-field"
              defaultValue={usd(this.props.budgeted)}
              onChange={this.handleChange.bind(this)}
            />
       	</div>
       	<div className="outflow column">
       		{usd(this.props.outflow)}
       	</div>
       	<div className="balance column">
       		{usd(this.props.budgeted - this.props.outflow)}
       	</div>
      </div>
    );
  }

  handleChange(event, value) {
    var indexParent = this.props.indexParent;
    var index = this.props.index;
    this.props.dispatch(changeBudgetedAmount(value, indexParent, index));
  }
}

module.exports = connect(mapStateToProps)(BudgetCategory);
