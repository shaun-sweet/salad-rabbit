import React, { Component } from 'react'
import '../styles/AddAccountContainer.css'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'

var mapStateToProps = function(store) {
  return {
    accounts: store.accounts
  };
}
class AddAccountContainer extends Component {

  state = {
    open: false,
    value: 1,
    account: {

    }
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
      />,
    ];
    return (
      <div className="add-account-container">
        <RaisedButton className="add-account-button" label="Add Account" onTouchTap={this.handleOpen} />
        <Dialog
            className="add-account-form"
            title="Create a New Account"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <TextField
              defaultValue="New Account"
              floatingLabelText="Name"
            />
            <br />
            <TextField
              defaultValue="0.00"
              floatingLabelText="Current Balance"
            />
            <br />
            <SelectField
              floatingLabelText="Account Type"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <MenuItem value={1} primaryText="Checking" />
              <MenuItem value={2} primaryText="Savings" />
              <MenuItem value={3} primaryText="Credit Card" />
            </SelectField>
          </Dialog>
        </div>
    );
  }

  handleSubmit = (event) => {
    console.log(event.target.value);
  }

  handleChange = (event, index, value) => this.setState({value});

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

}

module.exports = connect(mapStateToProps)(AddAccountContainer);
