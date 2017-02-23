import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import '../../styles/BudgetSubcategory.css'
import { changeBudgetedAmount } from '../../actions/categoriesActions'
import { connect } from 'react-redux'

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
              defaultValue={this.props.budgeted}
              onChange={this.handleChange.bind(this)}
            />
       	</div>
       	<div className="outflow column">
       		{this.props.outflow}
       	</div>
       	<div className="balance column">
       		{this.props.budgeted - this.props.outflow}
       	</div>
      </div>
    );
  }

  handleChange(event, value) {
    // var indexParent = this.props.indexParent;
    // var index = this.props.index;
    // console.log(indexParent, index);
    // this.props.dispatch(changeBudgetedAmount(value, indexParent, index));
    console.log('budget changed to ' + value);
  }
}

module.exports = connect(mapStateToProps)(BudgetSubcategory);