import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import { changeBudgetedAmount } from '../../../actions/categoriesActions'
import { connect } from 'react-redux'
import numeral from 'numeral'

var mapStateToProps = function(store) {
  return {
    categories: store.categories
  };
}

export default class BudgetSubcategory extends Component {

  render() {
    return (
      <div className="budget-subcategory">
        <div className="name column">
        	{this.props.name}
       	</div>
       	<div className="budget column">
        	<TextField
              id="budget-text-field"
              defaultValue={numeral(this.props.budgeted).format('$0,0.00')}
              onChange={this.handleChange.bind(this)}
            />
       	</div>
       	<div className="outflow column">
       		{numeral(this.props.outflow).format('$0,0.00')}
       	</div>
       	<div className="balance column">
       		{numeral(this.props.budgeted - this.props.outflow).format('$0,0.00')}
       	</div>
      </div>
    );
  }

  handleChange(event, value) {
    var indexParent = this.props.indexParent;
    var index = this.props.index;
    console.log(indexParent, index);
    this.props.dispatch(changeBudgetedAmount(value, indexParent, index));
    console.log('budget changed to ' + value);
  }
}

module.exports = connect(mapStateToProps)(BudgetSubcategory);
