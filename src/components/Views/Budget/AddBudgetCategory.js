import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import TextField from 'material-ui/TextField'
import { addCategory } from '../../../actions/categoriesActions'
import { incrementCategoryId } from '../../../actions/categoryIdGeneratorActions'
import { addCategoryToMaster } from '../../../actions/categoriesActions'
import { connect } from 'react-redux'

var mapStateToProps = function(store) {
  return {
    categoryIdGenerator: store.categoryIdGenerator
  };
}
export default class AddBudgetCategory extends Component {
	state = {
    open: false,
    value: 1,
    category: {
      name: "",
      budgeted: 0,
      outflows: [],
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
	        <FloatingActionButton secondary={true} mini={true} onTouchTap={this.handleOpen}>
            <ContentAdd />
          </FloatingActionButton>
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
  	this.props.dispatch((dispatch)=>{
      let master_category = this.props.master_category;
      let categoryId = this.props.categoryIdGenerator;

      dispatch(addCategory({
        [categoryId]:{
          ...this.state.category, id: categoryId, masterCategory: master_category.id
        }
      }));
      dispatch(addCategoryToMaster({
        [master_category.id]:{
          ...master_category, categories: master_category.categories.map((category)=>category.id).concat([categoryId])
        }
      }));
      dispatch(incrementCategoryId());

      this.handleClose();
    });
	}

	handleChange(event, value) {
  	this.setState({
  	  category: {
  	    ...this.state.category,
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

module.exports = connect(mapStateToProps)(AddBudgetCategory);
