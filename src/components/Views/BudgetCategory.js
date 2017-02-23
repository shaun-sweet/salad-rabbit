import React, { Component } from 'react'

export default class BudgetCategory extends Component {

  render() {
    return (
      <div id="budget-categories">
        {this.props.master_category}
      </div>
    );
  }
}