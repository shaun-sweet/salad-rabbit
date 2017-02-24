import React, { Component } from 'react'
import BudgetMasterCategory from './BudgetMasterCategory'


export default class BudgetCategoriesContainer extends Component {

  render() {
   return (
     <div id="budget-categories">
        {this.masterCategoriesList()}
     </div>
   );
 }

  masterCategoriesList() {
    return this.props.master_categories.map((master_category, index) => <BudgetMasterCategory {...master_category} index={index} key={index}/>);
  }
}