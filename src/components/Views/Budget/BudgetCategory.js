import React, { Component } from 'react'
import { changeBudgetedAmount, changeCategoryName } from '../../../actions/categoriesActions'
import { usd, normalizeCurrency } from '../../../helpers/index'

export default class BudgetCategory extends Component {
  constructor(props){
    super(props);
    this.__handleAmountSubmit = this.__handleAmountSubmit.bind(this);
    this.__handleNameSubmit = this.__handleNameSubmit.bind(this);
  }

  state = {
    open: false,
    value: 1,
    budgeted: this.props.category.budgeted,
  };

  render() {
    return (
      <div className="budget-category">
        <div className="name column">
          <InlineEdit defaultInputText={this.props.category.name} defaultDisplayText={this.props.category.name} handleSubmit={this.__handleNameSubmit} />
        </div>
       	<div className="budget column">
        	<InlineEdit defaultInputText={normalizeCurrency(this.state.budgeted)} defaultDisplayText={usd(this.state.budgeted)} handleSubmit={this.__handleAmountSubmit} />
       	</div>
       	<div className="outflow column">
       		{usd(this.props.category.outflow)}
       	</div>
       	<div className="balance column">
       		{usd(this.props.category.budgeted - this.props.category.outflow)}
       	</div>
      </div>
    );
  }

  __handleNameSubmit(newName){
    let category = this.props.category;
    this.props.dispatch(changeCategoryName({
      [category.id]:{
        ...category, name: newName
      }
    }));
    this.setState({
      name: newName
    })
  }

  __handleAmountSubmit(newValue){
    let category = this.props.category;
    this.props.dispatch(changeBudgetedAmount({
      [category.id]:{
        ...category, budgeted: normalizeCurrency(newValue)
      }
    }));
    this.setState({
        budgeted: newValue
      });
    }

  }

class InlineEdit extends Component {
  constructor(props){
    super(props);
    this.__handleClick = this.__handleClick.bind(this);
    this.__handleBlur = this.__handleBlur.bind(this);
    this.__getTextField = this.__getTextField.bind(this);
  }

  state = {
    editable: false,
  };

  render(){
    return (
      <div className="inlineEdit">
        {this.__getTextField()}
      </div>
    );
  }

  __handleClick(){
    this.setState({
      editable: true
    })
  }

  __handleBlur(event){
    this.props.handleSubmit(event.target.value);
    this.setState({
      editable: false
    })
  }

  __getTextField(){
    if(this.state.editable){
      return (
        <input className="editableTextField" type="text" defaultValue={this.props.defaultInputText} onFocus={(e)=>{e.target.select()}} onBlur={this.__handleBlur} autoFocus/>
      );
    }else{
      return (
        <div className="uneditableTextField" onClick={this.__handleClick}>
          {this.props.defaultDisplayText}
        </div>
      );
    }
  }

}
