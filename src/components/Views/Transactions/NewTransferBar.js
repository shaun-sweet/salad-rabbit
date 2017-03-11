import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'react-datepicker'
require('react-datepicker/dist/react-datepicker.css');

const NewTransferBar = (props) => {
  const inputProps = (key) => ({
    onChange: props.onChange,
    name: key,
    placeholder: key,
    type: 'text',
    className: 'new-transfer'
  });
  let clearedProps = {
    ...inputProps('cleared'),
    onChange: props.onCheckboxChange,
    type: 'checkbox',
    defaultChecked: true
  };
  return (
    <div className='new-transfer-bar'>
      <div className="row">
        <AccountDropdown
          onChange={props.onChange}
          accounts={props.accounts}
          name="fromAccount"
        />
        <div className='new-transfer'>
          <DatePicker
            id="date-picker"
            todayButton="Today"
            onChange={props.onDateChange}
            selected={props.selectedDate}
          />
        </div>
        <AccountDropdown
          onChange={props.onChange}
          accounts={props.accounts}
          name="toAccount"
        />
        <FormInput {...inputProps('memo')} />
        <FormInput {...inputProps('amount')} />
        <FormInput {...clearedProps} />
      </div>
      <RaisedButton onClick={props.handleSaveNewTransfer} className="save-transfer-button" label="Save" />
      <RaisedButton onClick={props.handleCancelTransfer} className="cancel-transfer-button" label="Cancel" />
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
  className: 'new-transfer'
}

const AccountDropdown = (props) => (
  <div className={props.className}>
    <select onChange={props.onChange} name={props.name}>
      {props.accounts.map((account) => {
        return <option key={account.id} value={account.id}>{account.name}</option>
      })}
    </select>
  </div>
)

module.exports = NewTransferBar;
