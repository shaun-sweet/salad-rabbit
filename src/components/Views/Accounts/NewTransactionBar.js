import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'

export default class NewTransactionBar extends Component {

  render() {
    return (
      <div className='new-transaction-bar'>
        <div className="row">
          <div>
            <input className='new-transaction' type='text' placeholder='account'/>
          </div>
          <div>
            <input className='new-transaction' type='text' placeholder='date'/>
          </div>
          <div>
            <input className='new-transaction' type='text' placeholder='payee'/>
          </div>
          <div>
            <input className='new-transaction' type='text' placeholder='category'/>
          </div>
          <div>
            <input className='new-transaction' type='text' placeholder='memo'/>
          </div>
          <div>
            <input className='new-transaction' type='text' placeholder='outflow'/>
          </div>
          <div>
            <input className='new-transaction' type='text' placeholder='inflow'/>
          </div>
          <div>
            <input className='new-transaction' type='text' placeholder='cleared'/>
          </div>
        </div>
        <RaisedButton className="save-transaction-button" label="Save" />
        <RaisedButton onClick={this.props.handleCancelTransaction} className="cancel-transfer-button" label="Cancel" />
      </div>
    );
  }
}
