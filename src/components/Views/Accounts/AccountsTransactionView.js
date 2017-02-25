import React, { Component } from 'react'
import { connect } from 'react-redux'
import TransactionListTable from './TransactionListTable.js'
import Transaction from './Transaction'
import RaisedButton from 'material-ui/RaisedButton';
import NewTransaction from './NewTransaction'

class AccountsTransactionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingTransaction: false
    }
    this.handleAddingTransaction = this.handleAddingTransaction.bind(this);
  }


  render() {
    const transactions = this.props.transactions.map((transaction, index) =>
       <Transaction
         key={index}
         account={transaction.account}
         date={transaction.date}
         payee={transaction.payee}
         category={transaction.category}
         memo={transaction.memo}
         outflow={transaction.outflow}
         inflow={transaction.inflow}
         cleared={transaction.cleared}
       />);
    return (
      <div ref="view_container" id='accounts-transaction-view'>
        <TransactionListTable>
          {this.state.addingTransaction ? <NewTransaction /> : null}
          {transactions}
        </TransactionListTable>
        <div className="transaction-controls">
          <RaisedButton onClick={this.handleAddingTransaction} className="add-transaction-button" label="Add Transaction" />
          <RaisedButton className="make-transfer-button" label="Make Transfer" />
        </div>
      </div>
    );
  }

  handleAddingTransaction() {
    this.setState({addingTransaction: true});
  }

}

var mapStateToProps = function(store) {
  return {
    accounts: store.accounts,
    transactions: store.transactions,
    master_categories: store.master_categories
  };
}
module.exports = connect(mapStateToProps)(AccountsTransactionView);
