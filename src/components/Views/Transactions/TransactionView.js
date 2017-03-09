import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTransaction } from '../../../actions/transactionsActions'
import TransactionListTable from './TransactionListTable.js'
import Transaction from './Transaction'
import NewTransactionBar from './NewTransactionBar'
import TransactionControls from './TransactionControls'
import { incrementTransactionId } from '../../../actions/transactionsIdGeneratorActions'

let mapStateToProps = function(store) {
  return {
    accounts: store.accounts,
    transactions: store.transactions,
    categories: store.categories,
    transactionsIdGenerator: store.transactionsIdGenerator
  };
}

class TransactionView extends Component {
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
    const transactionsList = this.denormalizeTransactions().map((transaction, index)=><Transaction {...transaction} key={transaction.id} />);

    return (
      <div ref="view_container" id='accounts-transaction-view'>
        <TransactionListTable>
          {transactionsList}
        </TransactionListTable>
        {this.state.addingTransaction ? this.showNewTransactionBar() : this.showTransactionControls() }
      </div>
    );
  }

  denormalizeTransactions(){
    return Object.keys(this.props.transactions).map((transactionId, index)=>{
      let transaction = {...this.props.transactions[transactionId]};
      transaction.category = this.props.categories[transaction.category];
      transaction.account = this.props.accounts[transaction.account];
      return transaction;
    });
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
    let id = this.props.transactionsIdGenerator;
    let transaction = {
      [id]: {
      ...this.state.formData,
      id: this.props.transactionsIdGenerator
      }
    }
    this.props.dispatch((dispatch) =>{
      dispatch(addTransaction(transaction));
      dispatch(incrementTransactionId());
      this.setState({addingTransaction: false});
    })
  }

}

module.exports = connect(mapStateToProps)(TransactionView);