import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { addSubcategory } from '../../../actions/categoriesActions'
import { connect } from 'react-redux'

var mapStateToProps = function(store) {
  return {
    categories: store.categories
  };
}
export default class AddBudgetSubcategory extends Component {
	state = {
	    open: false,
	    value: 1,
	    subcategory: {
          name: "",
          budgeted: 0,
          outflow: 0,
          balance: 0
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
	      <div className="add-budget-category">
	        <RaisedButton className="add-category-button" label="Add Subcategory" onTouchTap={this.handleOpen} />
	        <Dialog
	            className="add-category-form"
	            title="Add a Budget Subcategory"
	            actions={actions}
	            modal={false}
	            open={this.state.open}
	            onRequestClose={this.handleClose}
	          >
	            <TextField
	              defaultValue=""
	              floatingLabelText="Subcategory Name"
	              name="name"
	              onChange={this.handleChange.bind(this)}
	            />
	         </Dialog>
	       </div>
	    );
	}

	handleSubmit = (event) => {
	this.props.dispatch(addSubcategory(this.state.subcategory, this.props.index));
	this.handleClose();
	}

	handleChange(event, value) {
	this.setState({
	  subcategory: {
	    ...this.state.subcategory,
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

module.exports = connect(mapStateToProps)(AddBudgetSubcategory);
