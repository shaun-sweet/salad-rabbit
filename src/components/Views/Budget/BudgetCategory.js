import React, { Component } from 'react'
import { updateBudgetedAmount, updateCategoryName } from '../../../actions/categoriesActions'
import { usd, normalizeCurrency } from '../../../helpers/index'

export default class BudgetCategory extends Component {
  constructor(props){
    super(props);
    this._handleAmountSubmit = this._handleAmountSubmit.bind(this);
    this._handleNameSubmit = this._handleNameSubmit.bind(this);
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
          <InlineEdit defaultInputText={this.props.category.name} defaultDisplayText={this.props.category.name} handleSubmit={this._handleNameSubmit} />
        </div>
       	<div className="budget column">
        	<InlineEdit defaultInputText={normalizeCurrency(this.state.budgeted)} defaultDisplayText={usd(this.state.budgeted)} handleSubmit={this._handleAmountSubmit} />
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

  _handleNameSubmit(newName){
    let category = this.props.category;
    this.props.dispatch(updateCategoryName({
      [category.id]:{
        ...category, name: newName
      }
    }));
    this.setState({
      name: newName
    })
  }

  _handleAmountSubmit(newValue){
    let category = this.props.category;
    this.props.dispatch(updateBudgetedAmount({
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
    this._handleClick = this._handleClick.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
    this._getTextField = this._getTextField.bind(this);
  }

  state = {
    editable: false,
  };

  render(){
    return (
      <div className="inlineEdit">
        {this._getTextField()}
      </div>
    );
  }

  _handleClick(){
    this.setState({
      editable: true
    })
  }

  _handleBlur(event){
    this.props.handleSubmit(event.target.value);
    this.setState({
      editable: false
    })
  }

  _getTextField(){
    if(this.state.editable){
      return (
        <input className="editableTextField" type="text" defaultValue={this.props.defaultInputText} onFocus={(e)=>{e.target.select()}} onBlur={this._handleBlur} autoFocus/>
      );
    }else{
      return (
        <div className="uneditableTextField" onClick={this._handleClick}>
          {this.props.defaultDisplayText}
        </div>
      );
    }
  }

}
