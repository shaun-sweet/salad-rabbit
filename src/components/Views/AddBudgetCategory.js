import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { addCategory } from '../../actions/categoriesActions'
import { connect } from 'react-redux'

var mapStateToProps = function(store) {
  return {
    categories: store.categories
  };
}
export default class AddBudgetCategory extends Component {
	state = {
	    open: false,
	    value: 1,
	    category: {
	      master_category: "Monthly Bills",
	      subcategories: []
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
	        <RaisedButton className="add-category-button" label="Add Category" onTouchTap={this.handleOpen} />
	        <Dialog
	            className="add-category-form"
	            title="Add a Budget Category"
	            actions={actions}
	            modal={false}
	            open={this.state.open}
	            onRequestClose={this.handleClose}
	          >
	            <TextField
	              defaultValue=""
	              floatingLabelText="Category Name"
	              name="name"
	              onChange={this.handleChange.bind(this)}
	            />
	         </Dialog>
	       </div>
	    );
	}

	handleSubmit = (event) => {
	this.props.dispatch(addCategory(this.state.category));
	this.handleClose();
	}

	handleChange(event, value) {
	const name = event.target.name;
	this.setState({
	  category: {
	    ...this.state.category,
	    master_category: value
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

module.exports = connect(mapStateToProps)(AddBudgetCategory);