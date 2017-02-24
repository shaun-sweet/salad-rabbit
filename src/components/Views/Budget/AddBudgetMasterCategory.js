import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import { addMasterCategory } from '../../../actions/categoriesActions'
import { connect } from 'react-redux'

var mapStateToProps = function(store) {
  return {
    categories: store.categories
  };
}
export default class AddBudgetMasterCategory extends Component {
	state = {
	    open: false,
	    value: 1,
	    master_category: {
	      name: "",
	      categories: []
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
	      <div className="add-budget-master-category">
	        <FloatingActionButton className="add-master-category-button" mini={true} onTouchTap={this.handleOpen}><ContentAdd />
	        </FloatingActionButton>
	        <Dialog
	            className="add-master-category-form"
	            title="Add a Budget Master Category"
	            actions={actions}
	            modal={false}
	            open={this.state.open}
	            onRequestClose={this.handleClose}
	          >
	            <TextField
	              defaultValue=""
	              floatingLabelText="Master Category Name"
	              name="name"
	              onChange={this.handleChange.bind(this)}
	            />
	         </Dialog>
	       </div>
	    );
	}

	handleSubmit = (event) => {
	this.props.dispatch(addMasterCategory({...this.state.master_category}));
	this.handleClose();
	}

	handleChange(event, value) {
	this.setState({
	  master_category: {
	      name: value,
	      categories: []
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

module.exports = connect(mapStateToProps)(AddBudgetMasterCategory);
