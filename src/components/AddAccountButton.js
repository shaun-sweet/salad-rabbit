import React, { Component } from 'react'
import '../styles/AddAccountButton.css'
export default class AddAccountButton extends Component {

  render() {
    return (
      <button {...this.props} className="add-account-button"> Add Account </button>
    );
  }
}
