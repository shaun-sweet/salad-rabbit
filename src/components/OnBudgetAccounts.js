import React, { Component } from 'react'
import '../styles/OnBudgetAccounts.css'
import BudgetAccountListItem from './BudgetAccountListItem'
import { connect } from 'react-redux'

var mapStateToProps = function(store) {
  return {
    accounts: store.accounts
  };
}
class OnBudgetAccounts extends Component {

  accountsList() {
    return this.props.accounts.map((account, index) => <BudgetAccountListItem {...account} key={index} />);
  }

  render() {
    return (
      <div className="on-budget-accounts">
        <h1> On Budget Accounts </h1>
        <ul>
          {this.accountsList()}
        </ul>
      </div>
    );
  }
}

module.exports = connect(mapStateToProps)(OnBudgetAccounts);
