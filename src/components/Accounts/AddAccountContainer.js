import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { addAccount } from '../../actions/accountsActions'
import { connect } from 'react-redux'


class AddAccountContainer extends Component {

  state = {
    open: false,
    value: 1,
    account: {
      name: "",
      type: "",
      balance: "",
      note: ""
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
              name="name"
              onChange={this.handleChange.bind(this)}
            />
            <br />
            <TextField
              name="balance"
              defaultValue="0.00"
              floatingLabelText="Current Balance"
              onChange={this.handleChange.bind(this)}
            />
            <br />
            <SelectField
              name="type"
              floatingLabelText="Account Type"
              value={this.state.value}
              onChange={this.handleAccountTypeChange.bind(this)}
            >
              <MenuItem ref="type" value={1} primaryText="Checking" />
              <MenuItem ref="type" value={2} primaryText="Savings" />
              <MenuItem ref="type" value={3} primaryText="Credit Card" />
            </SelectField>
          </Dialog>
        </div>
    );
  }

  handleSubmit = (event) => {
    this.props.dispatch(addAccount(this.state.account));
    this.handleClose();
  }

  handleChange(event, value) {
    const name = event.target.name;
    this.setState({
      account: {
        ...this.state.account,
        [name]: value
      }
    });
  }

  handleAccountTypeChange(event,index, value){
    console.log(value);
    console.log(this.state);
    var val;
    if (value === 1) {
      val = "Checking";
    }
    if (value === 2) {
      val = "Savings";
    }
    if (value === 3) {
      val = "Credit Card";
    }
    this.setState({
      value: value,
      account: {
        ...this.state.account,
        type: val
      }
    });
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

}

var mapStateToProps = function(store) {
  return {
    accounts: store.accounts
  };
}

module.exports = connect(mapStateToProps)(AddAccountContainer);
