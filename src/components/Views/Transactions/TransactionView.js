import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { addTransaction } from '../../../actions/transactionsActions'
import TransactionListTable from './TransactionListTable.js'
import Transaction from './Transaction'
import NewTransactionBar from './NewTransactionBar'
import { normalizeCurrency } from '../../../helpers'
import TransactionControls from './TransactionControls'
import { incrementTransactionId } from '../../../actions/transactionsIdGeneratorActions'
import NewTransferBar from './NewTransferBar'

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
    this.initialState = {
      formData: {
        account: 1,
        category: 1,
        date: moment(),
        cleared: true,
        inflow: null,
        outflow: null
      },
      transferFormData: {
        fromAccount: 1,
        toAccount: 1,
        category: null,
        date: moment(),
        cleared: true,
        inflow: null,
        outflow: null
      },
      addingTransaction: false,
      addingTransfer: false
    }
    this.state = this.initialState;
  }

  render() {
    const transactionsList = this.denormalizeTransactions().map((transaction) => <Transaction {...transaction} key={transaction.id} />);
    return (
      <div ref="view_container" id='accounts-transaction-view'>
        <TransactionListTable>
          {transactionsList}
        </TransactionListTable>
        { this.controlsBar() }
      </div>
    );
  }

  controlsBar(){
    if (this.state.addingTransaction){
      return this.showNewTransactionBar();
    }else if(this.state.addingTransfer){
      return this.showNewTransferBar();
    }else{
      return this.showTransactionControls();
    }
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

  showNewTransferBar = () => {
    return (
      <NewTransferBar
        handleCancelTransfer={this.handleCancelTransfer}
        onCheckboxChange={this.handleTransferCheckboxChange}
        onChange={this.handleTransferFormChange}
        selectedDate={this.state.transferFormData.date}
        onDateChange={this.handleTransferDateChange}
        handleSaveNewTransfer={this.handleSaveNewTransfer}
        accounts={this.denormalizeOpenAccounts()}
      />);
  }

  handleTransferDateChange = (date) => {
    this.setState({
      transferFormData: {
        ...this.state.transferFormData,
        date: date
      }
    })
  }

  handleTransferCheckboxChange = (e) => {
    console.log(e.target.checked);
    let val;
    e.target.checked ? val = true : val = false;
    this.setState({
      transferFormData: {
        ...this.state.transferFormData,
        cleared: val
      }
    })
  }

  handleTransferFormChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    this.setState({
      transferFormData: {
        ...this.state.transferFormData,
        [name]: val
      }
    });
  }

  handleCancelTransfer = () => {
    this.setState({addingTransfer: false})
  }

  handleAddingTransfer = () => {
    this.setState({addingTransfer: true});
  }

  handleSaveNewTransfer = () => {
    let data = this.state.transferFormData;
    this.props.dispatch((dispatch) =>{
      dispatch(addTransaction(this.createTransferTransaction(this.props.transactionsIdGenerator, data.fromAccount, "Transfer from " + this.props.accounts[data.toAccount].name, null, normalizeCurrency(data.amount) )));
      dispatch(incrementTransactionId());

      dispatch(addTransaction(this.createTransferTransaction(this.props.transactionsIdGenerator+1, data.toAccount, "Transfer to " + this.props.accounts[data.fromAccount].name, normalizeCurrency(data.amount), null)));
      dispatch(incrementTransactionId());

      this.setState(this.initialState);
    })
  }

  createTransferTransaction = (id, account, payee, inflow, outflow) => {
    return {
      [id]: {
        id: id,
        account: account,
        date: this.state.transferFormData.date.format("L"),
        payee: payee,
        category: null,
        memo: this.state.transferFormData.memo,
        outflow: outflow,
        inflow: inflow,
        cleared: this.state.transferFormData.cleared
      }
    };
  }

  showNewTransactionBar = () => {
    return (
      <NewTransactionBar
        handleCancelTransaction={this.handleCancelTransaction}
        onCheckboxChange={this.handleCheckboxChange}
        onChange={this.handleFormChange}
        selectedDate={this.state.formData.date}
        onDateChange={this.handleDateChange}
        handleSaveNewTransaction={this.handleSaveNewTransaction}
        accounts={this.denormalizeOpenAccounts()}
        masterCategories={this.denormalizeMasterCategories()}
      />);
  }

  showTransactionControls = () => {
    return (
      <TransactionControls
        handleAddingTransaction={this.handleAddingTransaction}
        handleAddingTransfer={this.handleAddingTransfer}
      />);
  }

  handleDateChange = (date) => {
    this.setState({
      formData: {
        ...this.state.formData,
        date: date
      }
    })
  }

  handleCheckboxChange = (e) => {
    console.log(e.target.checked);
    let val;
    e.target.checked ? val = true : val = false;
    this.setState({
      formData: {
        ...this.state.formData,
        cleared: val
      }
    })
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

  validateFormInput(formData) {
    let transactionId = this.props.transactionsIdGenerator;
    let validatedData;
    // checks to make sure the inflow and outflow aren both set.  if so, sets inflow to null
    if (formData[transactionId].inflow && formData[transactionId].outflow) {
      validatedData = {
        [transactionId]: {
          ...formData[transactionId],
          outflow: normalizeCurrency(formData[transactionId].outflow),
          inflow: null
        }
      }
    }else{
      validatedData = formData;
      // checks all keys for blank strings, if its blank it sets the value to null.
      for (let transProp in formData[transactionId]) {
        if (validatedData[transactionId][transProp] === "") {
          validatedData[transactionId][transProp] = null;
        }
      }
    }
    // sanitizes all redux store data before submitting it to the store.
    validatedData[transactionId].inflow = normalizeCurrency(validatedData[transactionId].inflow);
    validatedData[transactionId].outflow = normalizeCurrency(validatedData[transactionId].outflow);
    validatedData[transactionId].date = validatedData[transactionId].date.format("L");
    return validatedData;
  }

  handleCancelTransaction = () => {
    this.setState({addingTransaction: false})
  }

  handleAddingTransaction = () => {
    this.setState({addingTransaction: true});
  }

  handleSaveNewTransaction = () => {
    let transaction = this.normalizeFormData();
    this.props.dispatch((dispatch) =>{
      dispatch(addTransaction(transaction));
      dispatch(incrementTransactionId());
      this.setState(this.initialState);
    })
  }

  // normalizing of data before sending it to the redux store
  normalizeFormData = () => {
    let id = this.props.transactionsIdGenerator;
    return this.validateFormInput({
      [id]: {
        ...this.state.formData,
        id: this.props.transactionsIdGenerator
      }
    });
  }

}

module.exports = connect(mapStateToProps)(TransactionView);
