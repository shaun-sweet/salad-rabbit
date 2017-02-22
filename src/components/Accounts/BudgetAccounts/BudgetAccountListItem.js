import React, { Component } from 'react';
import '../../../styles/BudgetAccountListItem.css'
import numeral from 'numeral'

export default class BudgetAccountListItem extends Component {

  render() {
    return (
      <li>{this.props.name}<span className="account-balance"  style={{float: "right"}} >{numeral(this.props.balance).format('$0,0.00')}</span></li>
    );
  }
}
