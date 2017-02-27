import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export default class TransactionControls extends Component {

  render() {
    return (
      <div className="transaction-controls">
        <RaisedButton onClick={this.props.handleAddingTransaction} className="add-transaction-button" label="Add Transaction" />
        <RaisedButton className="make-transfer-button" label="Make Transfer" />
      </div>
    );
  }
}
