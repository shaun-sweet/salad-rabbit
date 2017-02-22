import React, { Component } from 'react'
import '../styles/AddAccountButton.css'
import RaisedButton from 'material-ui/RaisedButton';
export default class AddAccountButton extends Component {

  render() {
    return (
      <RaisedButton className="add-account-button" label="Add Account" {...this.props} />
    );
  }
}
