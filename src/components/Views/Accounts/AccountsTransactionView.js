import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTransaction } from '../../../actions/transactionsActions'
import TransactionListTable from './TransactionListTable.js'
import Transaction from './Transaction'
import NewTransactionBar from './NewTransactionBar'
import TransactionControls from './TransactionControls'

let mapStateToProps = function(store) {
  return {
    accounts: store.accounts,
    transactions: store.transactions,
    categories: store.categories,
    transactionsIdGenerator: store.transactionsIdGenerator
  };
}

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
       Transaction(transaction));
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

  handleFormChange = (e) => {
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
    let transaction = {...this.state.formData, id: this.props.transactionsIdGenerator};
    this.props.dispatch((dispatch) =>{
      dispatch(addTransaction(transaction));
      this.setState({addingTransaction: false});
    })
  }

}

module.exports = connect(mapStateToProps)(AccountsTransactionView);
