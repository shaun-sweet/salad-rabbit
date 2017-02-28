import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import CategoryDropdown from './CategoryDropdown'

export default class NewTransactionBar extends Component {

  render() {
    const inputProps = (key) => ({
      onChange: this.props.onChange,
      name: key,
      placeholder: key,
      type: 'text',
      className: 'new-transaction'
    });
    return (
      <div className='new-transaction-bar'>
        <div className="row">
          <div>
            <input {...inputProps('account')} />
          </div>
          <div>
            <input {...inputProps('date')} />
          </div>
          <div>
            <input {...inputProps('payee')} />
          </div>
          <div>
            {/* <input {...inputProps('category')}  /> */}
            <CategoryDropdown
              accounts={this.props.accounts}
              categories={this.props.categories}
            />
          </div>
          <div>
            <input {...inputProps('memo')} />
          </div>
          <div>
            <input {...inputProps('outflow')} />
          </div>
          <div>
            <input {...inputProps('inflow')} />
          </div>
          <div>
            <input {...inputProps('cleared')} />
          </div>
        </div>
        <RaisedButton onClick={this.props.handleSaveNewTransaction} className="save-transaction-button" label="Save" />
        <RaisedButton onClick={this.props.handleCancelTransaction} className="cancel-transfer-button" label="Cancel" />
      </div>
    );
  }
}
