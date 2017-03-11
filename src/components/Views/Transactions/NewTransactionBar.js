import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'react-datepicker'
require('react-datepicker/dist/react-datepicker.css');

const NewTransactionBar = (props) => {
  const inputProps = (key) => ({
    onChange: props.onChange,
    name: key,
    placeholder: key,
    type: 'text',
    className: 'new-transaction'
  });
  let clearedProps = {
    ...inputProps('cleared'),
    onChange: props.onCheckboxChange,
    type: 'checkbox',
    defaultChecked: true
  };
  return (
    <div className='new-transaction-bar'>
      <div className="row">
        <AccountDropdown
          onChange={props.onChange}
          accounts={props.accounts}
        />
        <div className='new-transaction'>
          <DatePicker
            id="date-picker"
            todayButton="Today"
            onChange={props.onDateChange}
            selected={props.selectedDate}
          />
        </div>
        <FormInput {...inputProps('payee')} />
        <CategoryDropdown
          onChange={props.onChange}
          categories={props.masterCategories}
        />
        <FormInput {...inputProps('memo')} />
        <FormInput {...inputProps('outflow')} />
        <FormInput {...inputProps('inflow')} />
        <FormInput {...clearedProps} />
      </div>
      <RaisedButton onClick={props.handleSaveNewTransaction} className="save-transaction-button" label="Save" />
      <RaisedButton onClick={props.handleCancelTransaction} className="cancel-transfer-button" label="Cancel" />
    </div>
  )
}

const FormInput = (props) => (
  <div>
    <input {...props} />
  </div>
)

FormInput.defaultProps = {
  type: 'text',
  className: 'new-transaction'
}

const AccountDropdown = (props) => (
  <div className={props.className}>
    <select onChange={props.onChange} name='account'>
      {props.accounts.map((account) => {
        return <option key={account.id} value={account.id}>{account.name}</option>
      })}
    </select>
  </div>
)


const CategoryDropdown = (props) => (
  <div className={props.className}>
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
  </div>
)

module.exports = NewTransactionBar;
