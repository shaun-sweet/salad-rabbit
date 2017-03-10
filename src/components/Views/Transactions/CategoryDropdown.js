import React, { Component } from 'react'
// import DropDownMenu from 'material-ui/DropDownMenu'
// import MenuItem from 'material-ui/MenuItem'

export default class CategoryDropdown extends Component {

	state = {
		selectedCategory: 0
	}

	render() {
		return (
	    <select value={this.state.selectedCategory}>
        <option value=''></option>
      </select>
    );
	}

  handleCategoryChange = (event, index, value) => {
		this.setState({chosenCategory: value});
	};

	categoriesMenuItems() {
    	return this.props.categories.map((master_category, parentIndex)=>{
    		return master_category.categories.map((category, index)=>{
    			return <option value={category.name} key={parentIndex + ": " + index} primaryText={category.name}/>
    		})
    	});
  	}

}
