import React, { Component } from 'react'
import BudgetCategory from './BudgetCategory'


export default class BudgetCategoriesContainer extends Component {

  render() {
   return (
     <div id="budget-categories">
        {this.categoriesList()}
     </div>
   );
 }

  categoriesList() {
    return this.props.categories.map((category, index) => <BudgetCategory {...category} index={index} key={index}/>);
  }
}