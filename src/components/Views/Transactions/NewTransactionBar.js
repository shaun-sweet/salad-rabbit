import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'react-datepicker'
require('react-datepicker/dist/react-datepicker.css');

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
            <AccountDropdown
              onChange={this.props.onChange}
              accounts={this.props.accounts}
            />
          </div>
          <div>
            <DatePicker
              id="date-picker"
              todayButton="Today"
              onChange={this.props.onDateChange}
              selected={this.props.selectedDate}
            />
          </div>
          <div>
            <input {...inputProps('payee')} />
          </div>
          <div>
            <CategoryDropdown
              onChange={this.props.onChange}
              categories={this.props.masterCategories}
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



const AccountDropdown = (props) => (
  <select onChange={props.onChange} name='account'>
    {props.accounts.map((account) => {
      return <option key={account.id} value={account.id}>{account.name}</option>
    })}
  </select>
)


const CategoryDropdown = (props) => (
  <select onChange={props.onChange} name='category'>
    {props.categories.map((masterCategory) => {
      return (
        <optgroup key={masterCategory.id} label={masterCategory.name}>
          {masterCategory.categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>{category.name}</option>
            );
          })}
        </optgroup>
      );
    })}
  </select>
)
