import React, { Component } from 'react'
import { changeBudgetedAmount } from '../../../actions/categoriesActions'
import { usd, normalizeCurrency } from '../../../helpers/index'

export default class BudgetCategory extends Component {
  constructor(props){
    super(props);
    this.__handleSubmit = this.__handleSubmit.bind(this);
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
        	{this.props.category.name}
       	</div>
       	<div className="budget column">
        	<InlineEdit defaultText={usd(this.state.budgeted)} handleSubmit={this.__handleSubmit} />
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

  __handleSubmit(newValue){
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
        <input className="editableTextField" type="text" defaultValue={normalizeCurrency(this.props.defaultText)} onFocus={(e)=>{e.target.select()}} onBlur={this.__handleBlur} autoFocus/>
      );
    }else{
      return (
        <div className="uneditableTextField" onClick={this.__handleClick}>
          {this.props.defaultText}
        </div>
      );
    }
  }

}
