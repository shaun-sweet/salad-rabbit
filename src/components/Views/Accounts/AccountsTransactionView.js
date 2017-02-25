import React, { Component } from 'react'
import { connect } from 'react-redux'
import TransactionListTable from './TransactionListTable.js'
import Transaction from './Transaction'
import RaisedButton from 'material-ui/RaisedButton';


class AccountsTransactionView extends Component {

  render() {
    return (
      <div ref="view_container" id='accounts-transaction-view'>
        <TransactionListTable>
          <Transaction>
          </Transaction>
        </TransactionListTable>
          <div className="transaction-controls">
            <RaisedButton className="add-transaction-button" label="Add Transaction" />
            <RaisedButton className="make-transfer-button" label="Make Transfer" />
          </div>
      </div>
    );
  }

}

var mapStateToProps = function(store) {
  return {
    accounts: store.accounts,
    transactions: store.transactions
  };
}
module.exports = connect(mapStateToProps)(AccountsTransactionView);
