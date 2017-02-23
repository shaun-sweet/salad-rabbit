import React, { Component } from 'react';
import { usd } from '../../../helpers'

export default class BudgetAccountListItem extends Component {

  render() {
    return (
      <li>{this.props.name}<span className="account-balance"  style={{float: "right"}} >{usd(this.props.balance)}</span></li>
    );
  }
}
