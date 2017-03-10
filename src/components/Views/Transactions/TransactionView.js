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
    openAccounts: store.openAccounts,
    masterCategories: store.masterCategories,
    transactions: store.transactions,
    categories: store.categories,
    transactionsIdGenerator: store.transactionsIdGenerator
  };
}

class TransactionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        account: 1,
        category: 1
      },
      addingTransaction: false
    }
  }

  render() {
    const transactionsList = this.denormalizeTransactions().map((transaction) => <Transaction {...transaction} key={transaction.id} />);
    return (
      <div ref="view_container" id='accounts-transaction-view'>
        <TransactionListTable>
          {transactionsList}
        </TransactionListTable>
        { this.state.addingTransaction ? this.showNewTransactionBar() : this.showTransactionControls() }
      </div>
    );
  }

  denormalizeTransactions = () => {
    return Object.keys(this.props.transactions).map((transactionId, index)=>{
      let transaction = {...this.props.transactions[transactionId]};
      transaction.category = this.props.categories[transaction.category];
      transaction.account = this.props.accounts[transaction.account];
      return transaction;
    });
  }

  denormalizeMasterCategories = () => {
    let masterCategories = this.props.masterCategories;
    return Object.keys(masterCategories).map((masterCategoryId)=>{
      return {...masterCategories[masterCategoryId], categories: masterCategories[masterCategoryId].categories.map((categoryId)=>
        this.props.categories[categoryId])};
    })
  }

  denormalizeOpenAccounts = () => {
    return this.props.openAccounts.map((accountId) => {
      return this.props.accounts[accountId];
    });
  }

  showNewTransactionBar = () => {
    return (
      <NewTransactionBar
        handleCancelTransaction={this.handleCancelTransaction}
        onChange={this.handleFormChange}
        handleSaveNewTransaction={this.handleSaveNewTransaction}
        accounts={this.denormalizeOpenAccounts()}
        masterCategories={this.denormalizeMasterCategories()}
      />);
  }

  showTransactionControls = () => {
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

  handleCancelTransaction = () => {
    this.setState({addingTransaction: false})
  }

  handleAddingTransaction = () => {
    this.setState({addingTransaction: true});
  }

  handleSaveNewTransaction = () => {
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
