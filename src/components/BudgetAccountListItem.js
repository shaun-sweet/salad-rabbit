import React, { Component } from 'react';
import '../styles/BudgetAccountListItem.css'

export default class BudgetAccountListItem extends Component {

  render() {
    return (
      <li>{this.props.name}<span className="account-balance"  style={{float: "right"}} >{this.props.balance}</span></li>
    );
  }
}
