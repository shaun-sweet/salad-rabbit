import React, { Component } from 'react'
import BudgetAccountListItem from './BudgetAccountListItem'
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import { connect } from 'react-redux'
import { usd, sumArray } from '../../../helpers/index.js'
import { updateAccountName } from '../../../actions/accountsActions'
import { closeOpenAccount } from '../../../actions/openAccountsActions'

var mapStateToProps = function(store) {
  return {
    openAccounts: store.openAccounts,
    closedAccounts: store.closedAccounts,
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

 render() {
    let openAccounts = this.denormalizeOpenAccounts();
    let openAccountsComponents = openAccounts.map((account, index) =>
      <BudgetAccountListItem account={{...account}} submitCloseAccount={this.submitCloseAccount.bind(this)} submitAccountNameEdit={this.submitAccountNameEdit.bind(this)} key={account.id} />
    );
   return (
     <Card className="budget-accounts-container" expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
       <CardHeader

         title="Budget Accounts"
         subtitle={usd(sumArray(openAccounts, (account)=> account.balance))}
         actAsExpander={true}
         showExpandableButton={true}
       />
       <CardMedia
         expandable={true}
       />
       <CardText expandable={true}>
         <ul>
           {openAccountsComponents}
         </ul>
       </CardText>
     </Card>
   );
 }

 submitCloseAccount = (accountId) => {
   let closedAccounts = this.props.closedAccounts.concat([accountId]);
   let openAccounts = this.props.openAccounts.filter((currentAccountId)=> currentAccountId !== accountId );
   this.props.dispatch((dispatch) => {
     dispatch(closeOpenAccount(openAccounts));
   });
 };

 submitAccountNameEdit = (updatedAccount) => {
   this.props.dispatch(updateAccountName(updatedAccount));
 };

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

  denormalizeOpenAccounts() {
    return this.props.openAccounts.map((accountId, index) => {
      return this.props.accounts[accountId];
    });
  }

}

module.exports = connect(mapStateToProps)(BudgetAccountsContainer);
