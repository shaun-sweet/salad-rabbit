import React, { Component } from 'react'
import { connect } from 'react-redux'
import TransactionListTable from './TransactionListTable.js'
import Transaction from './Transaction'
import RaisedButton from 'material-ui/RaisedButton'
import NewTransactionBar from './NewTransactionBar'
import TransactionControls from './TransactionControls'

class AccountsTransactionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      addingTransaction: false
    }
    this.handleAddingTransaction = this.handleAddingTransaction.bind(this);
    this.handleCancelTransaction = this.handleCancelTransaction.bind(this);
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
          {transactions}
        </TransactionListTable>
        {this.state.addingTransaction ? this.showNewTransactionBar() : this.showTransactionControls() }
      </div>
    );
  }

  showNewTransactionBar() {
    return (
      <NewTransactionBar
        handleCancelTransaction={this.handleCancelTransaction}
      />);
  }

  showTransactionControls() {
    return (
      <TransactionControls
        handleAddingTransaction={this.handleAddingTransaction}
      />);
  }

  handleCancelTransaction() {
    this.setState({addingTransaction: false})
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
