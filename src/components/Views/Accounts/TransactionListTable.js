import React, { Component } from 'react'
import Transaction from './Transaction'
export default class TransactionListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='transaction-table'>
        <div className='transaction-headers'>
          <div id="account">Account</div>
          <div id="date">Date</div>
          <div id="payee">Payee</div>
          <div id="category">Category</div>
          <div id="memo">Memo</div>
          <div id="outflow">Outflow</div>
          <div id="inflow">Inflow</div>
          <div id="cleared">Cleared</div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
