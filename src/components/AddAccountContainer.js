import React, { Component } from 'react'
import '../styles/AddAccountContainer.css'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
export default class AddAccountContainer extends Component {

  state = {
    open: false,
    value: 1,
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
        onTouchTap={this.handleClose}
      />,
    ];
    return (
      <div>
        <RaisedButton className="add-account-button" label="Add Account" onTouchTap={this.handleOpen} />
        <Dialog
            title="Create a New Account"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
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

  handleChange = (event, index, value) => this.setState({value});

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

}
