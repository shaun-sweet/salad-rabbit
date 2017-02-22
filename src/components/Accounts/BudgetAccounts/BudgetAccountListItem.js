import React, { Component } from 'react';
<<<<<<< HEAD:src/components/Accounts/BudgetAccounts/BudgetAccountListItem.js
import '../../../styles/BudgetAccountListItem.css'
import numeral from 'numeral'
=======
import '../styles/BudgetAccountListItem.css'
import { usd } from '../helpers'
>>>>>>> bf84b2c17fa68028d8e9a69b9c918e09298624a8:src/components/BudgetAccountListItem.js

export default class BudgetAccountListItem extends Component {

  render() {
    return (
      <li>{this.props.name}<span className="account-balance"  style={{float: "right"}} >{usd(this.props.balance)}</span></li>
    );
  }
}
