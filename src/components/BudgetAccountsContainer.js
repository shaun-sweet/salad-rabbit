import React, { Component } from 'react'
import '../styles/OnBudgetAccounts.css'
import BudgetAccountListItem from './BudgetAccountListItem'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import { connect } from 'react-redux'

var mapStateToProps = function(store) {
  return {
    accounts: store.accounts
  };
}
class BudgetAccountsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }



  handleExpandChange = (expanded) => {
   this.setState({expanded: expanded});
 };

 handleToggle = (event, toggle) => {
   this.setState({expanded: toggle});
 };

 handleExpand = () => {
   this.setState({expanded: true});
 };

 handleReduce = () => {
   this.setState({expanded: false});
 };

 render() {
   return (
     <Card className="budget-accounts-container" expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
       <CardHeader
         title="Budget Accounts"
         subtitle="$300,000"
         actAsExpander={true}
         showExpandableButton={true}
       />
       <CardMedia
         expandable={true}
       >
       </CardMedia>
       <CardText expandable={true}>
        <ul>
          {this.accountsList()}
        </ul>
       </CardText>
     </Card>
   );
 }

 accountsList() {
   return this.props.accounts.map((account, index) => <BudgetAccountListItem {...account} key={index} />);
 }

}

module.exports = connect(mapStateToProps)(BudgetAccountsContainer);
