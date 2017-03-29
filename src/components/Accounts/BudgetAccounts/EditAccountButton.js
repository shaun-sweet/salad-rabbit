import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class EditAccountButton extends Component {

  state = {
    open: false,
    value: 1,
    account: {
      name: "",
    }
  };

  render() {
    const actions = [
      <FlatButton
        label="Close Account"
        primary={true}
        onTouchTap={this.handleCloseAccount.bind(this)}

      />,
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
      <div className="edit-account-container">
        <RaisedButton className="edit-account-button" label="✎" onTouchTap={this.handleOpen} />
        <Dialog
          className="edit-account-form"
          title="Edit Account"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            defaultValue={this.props.name}
            floatingLabelText="Name"
            name="name"
            onChange={this.handleAccountNameChange.bind(this)}
          />
          <br />
        </Dialog>
      </div>
    );
  }

  handleSubmit = (event) => {
    this.handleClose();
    this.props.submitAccountNameEdit({
      [this.props.id]: {
        ...this.props, name: this.state.account.name
      }
    });
    this.setState({account: {
      name: "",
    }});
  }

  handleCloseAccount(event){
    this.props.submitCloseAccount(this.props.id);
  }

  handleAccountNameChange(event, value) {
    this.setState({
      account: {
        name: value
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
