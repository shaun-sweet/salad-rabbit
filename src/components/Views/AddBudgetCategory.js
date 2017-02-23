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
	      total_budgeted: 0,
	      total_outflows: 0,
	      total_balance: 0,
	      sub_categories: []
	    }
    };

    componentWillMount(){
    	this.props.dispatch(addCategory(this.state.category));
    }

	render() {
	return (
	  <div id="add-budget-category">
	    ADD BUDGET CATEGORY BUTTON
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
	    ...this.state.account,
	    [name]: value
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