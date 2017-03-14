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
import SearchBar from './SearchBar.js'
import { addOutflow } from '../../../actions/categoriesActions'

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
        cleared: false,
        inflow: null,
        outflow: null
      },
      addingTransaction: false,
      addingTransfer: false
    }
    this.state = this.initialState;
  }

  filteredTransactions = (accountId) => {
    return this.denormalizeTransactions().filter(( transaction ) => {
      if (accountId === "all") {
        return true;
      }else{
      return (transaction.account.id.toString() === accountId)
    }
    })
  }


  render() {
    const transactionsList = this.filteredTransactions(this.props.params.id).map((transaction) => <Transaction {...transaction} key={transaction.id} />);

    return (
      <div ref="view_container" id='accounts-transaction-view'>
        <h2> Filtered By: {this.props.params.id === "all" ? "All Transactions" : this.props.accounts[this.props.params.id].name + " account"}</h2>
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
      <NewTransactionBar
        isTransfer={true}
        handleCancelTransaction={this.handleCancelTransfer}
        onCheckboxChange={this.handleCheckboxChange}
        onChange={this.handleFormChange}
        selectedDate={this.state.formData.date}
        onDateChange={this.handleDateChange}
        handleSaveNewTransaction={this.handleSaveNewTransfer}
        accounts={this.denormalizeOpenAccounts()}
      />);
  }

  handleCancelTransfer = () => {
    this.setState({addingTransfer: false})
  }

  handleAddingTransfer = () => {
    this.setState({addingTransfer: true, formData: {...this.state.formData, payee: 1}});
  }

  handleSaveNewTransfer = () => {
    let data = this.state.formData;
    this.props.dispatch((dispatch) =>{
      setTimeout(()=>{
        let fromAccountTransaction = this.createTransferTransaction(this.props.transactionsIdGenerator, data.account, "Transfer to " + this.props.accounts[data.payee].name, null, data.outflow);
        dispatch(addTransaction(this.validateFormInput(fromAccountTransaction)));
        dispatch(incrementTransactionId());

      }, 0)

      setTimeout(()=>{
        let toAccountTransaction = this.createTransferTransaction(this.props.transactionsIdGenerator, data.payee, "Transfer from " + this.props.accounts[data.account].name, data.outflow, null);
        dispatch(addTransaction(this.validateFormInput(toAccountTransaction)));
        dispatch(incrementTransactionId());

      }, 0)

      setTimeout(()=>{
        this.setState(this.initialState);
      }, 0)

    })
  }

  createTransferTransaction = (id, account, payee, inflow, outflow) => {
    let transaction = {
      [id]: {
        ...this.state.formData,
        id: id,
        account: account,
        payee: payee,
        category: null,
        outflow: outflow,
        inflow: inflow,
      }
    };
    return transaction;
  }

  showNewTransactionBar = () => {
    return (
      <NewTransactionBar
        isTransfer={false}
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
    let transactionId = Object.keys(formData)[0];
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

      let transactionId = transaction[Object.keys(transaction)[0]].id;
      let categoryId = transaction[Object.keys(transaction)[0]].category;
      let updatedCategory = {
        [categoryId]:{
          ...this.props.categories[categoryId],
          outflows: this.props.categories[categoryId].outflows.concat([transactionId])
        }
      };
      console.log(updatedCategory);
      dispatch(addOutflow(updatedCategory));

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
