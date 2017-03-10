import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { changeBudgetedAmount } from '../../../actions/categoriesActions'
import { connect } from 'react-redux'
import {usd} from '../../../helpers/index'


var mapStateToProps = function(store) {
  return {
    master_categories: store.master_categories
  };
}

export default class BudgetCategory extends Component {
  state = {
    open: false,
    value: 1,
    budgeted: this.props.budgeted,
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
      <div className="budget-category">
        <div className="name column">
        	{this.props.name}
       	</div>
       	<div className="budget column">
        	<div
            id="budget-text-field"
            onClick={this.handleOpen}
         >
            {usd(this.state.budgeted)}
          </div>
          <Dialog
            className="change-budgeted-amount"
            title="Change Budgeted Amount"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <TextField
              defaultValue={usd(this.state.budgeted)}
              name="name"
              onChange={this.handleChange.bind(this)}
            />
          </Dialog>
       	</div>
       	<div className="outflow column">
       		{usd(this.props.outflow)}
       	</div>
       	<div className="balance column">
       		{usd(this.props.budgeted - this.props.outflow)}
       	</div>
      </div>
    );
  }

  handleSubmit = (event) => {
    var indexParent = this.props.indexParent;
    var index = this.props.index;
    this.props.dispatch(changeBudgetedAmount(this.state.budgeted, indexParent, index));
    this.handleClose();
  }

  handleChange(event, value) {
  this.setState({
      budgeted: value
    });
  }

  handleOpen = () => {
  this.setState({open: true});
  };

  handleClose = () => {
  this.setState({open: false});
  };
}

module.exports = connect(mapStateToProps)(BudgetCategory);
