import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTransaction } from '../../../actions/transactionsActions'
import TransactionListTable from './TransactionListTable.js'
import Transaction from './Transaction'
import NewTransactionBar from './NewTransactionBar'
import TransactionControls from './TransactionControls'

class AccountsTransactionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      addingTransaction: false
    }
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSaveNewTransaction = this.handleSaveNewTransaction.bind(this);
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
        onChange={this.handleFormChange}
        handleSaveNewTransaction={this.handleSaveNewTransaction}
        accounts={this.props.accounts}
        categories={this.props.categories}
      />);
  }

  showTransactionControls() {
    return (
      <TransactionControls
        handleAddingTransaction={this.handleAddingTransaction}
      />);
  }

  handleFormChange(e) {
    const name = e.target.name;
    const val = e.target.value;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: val
      }
    });
  }

  handleCancelTransaction() {
    this.setState({addingTransaction: false})
  }

  handleAddingTransaction() {
    this.setState({addingTransaction: true});
  }

  handleSaveNewTransaction() {
    this.props.dispatch((dispatch) =>{
      dispatch(addTransaction(this.state.formData));
      this.setState({addingTransaction: false});
    })
  }

}

var mapStateToProps = function(store) {
  return {
    accounts: store.accounts,
    transactions: store.transactions,
    categories: store.categories
  };
}
module.exports = connect(mapStateToProps)(AccountsTransactionView);
