import React, {Component} from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux'

var mapStateToProps = function(store) {
  return {
  	accounts: store.accounts,
    categories: store.categories
  };
}

export default class AddTransaction extends Component{
	handleCategoryChange = (event, index, value) => {
		this.setState({chosen_category: value});
	};

	state = {
		chosen_category: {}
	}

	render() {
		return (
		  <div className='add-transaction'>
		  	<div className='change-transaction-category'>
			  	{this.state.chosen_category.name}
			    <DropDownMenu className = "category-menu" value={this.state.chosen_category.name} onChange={this.handleCategoryChange}>
			    	{this.accountsMenuItems()}
			   		{this.categoriesMenuItems()}
			    </DropDownMenu>
			</div>
		  </div>
		);
	}

	accountsMenuItems() {
		return this.props.accounts.map((account, index)=>{
    		return <MenuItem value={{name: account.name, index: index, type: "account"}} key={"account: " + index} primaryText={account.name}/>
    	})
	}

	categoriesMenuItems() {
    	return this.props.categories.map((master_category, parentIndex)=>{
    		return master_category.categories.map((category, index)=>{
    			return <MenuItem value={{name: category.name, parentIndex: parentIndex, index: index, type: "category"}} key={parentIndex + ": " + index} primaryText={category.name}/>
    		})
    	});
  	}

}


module.exports = connect(mapStateToProps)(AddTransaction);