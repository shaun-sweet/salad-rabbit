import React, { Component } from 'react'
import BudgetAccountListItem from './BudgetAccountListItem'
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import numeral from 'numeral'
import { connect } from 'react-redux'
import {usd} from '../../../helpers/index.js'

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
    let openAccounts = this.denormalizeOpenAccounts().map((account, index) =>
      <BudgetAccountListItem {...account} key={account.id} />
    );
   return (
     <Card className="budget-accounts-container" expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
       <CardHeader
         title="Budget Accounts"
         subtitle={usd(3000)}
         actAsExpander={true}
         showExpandableButton={true}
       />
       <CardMedia
         expandable={true}
       >
       </CardMedia>
       <CardText expandable={true}>
        <ul>
          {openAccounts}
        </ul>
       </CardText>
     </Card>
   );
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

  denormalizeOpenAccounts() {
    return this.props.openAccounts.map((accountId, index) => {
      return this.props.accounts[accountId];
    });
  }

}

module.exports = connect(mapStateToProps)(BudgetAccountsContainer);
