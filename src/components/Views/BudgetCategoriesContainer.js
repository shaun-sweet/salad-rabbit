import React, { Component } from 'react'
import BudgetCategory from './BudgetCategory'
import { connect } from 'react-redux'

var mapStateToProps = function(store) {
  return {
    categories: store.categories
  };
}

class BudgetCategoriesContainer extends Component {

  render() {
  	console.log(this.props);
   return (
     <div id="budget-categories">
        {this.accountsList()}
     </div>
   );
 }

  accountsList() {
    return this.props.categories.map((category, index) => <BudgetCategory {...category} key={index}/>);
  }
}



module.exports = connect(mapStateToProps)(BudgetCategoriesContainer);