import React, { Component } from 'react'
import BudgetAccountListItem from './BudgetAccountListItem'
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import numeral from 'numeral'
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

 render() {
   return (
     <Card className="budget-accounts-container" expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
       <CardHeader
         title="Budget Accounts"
         subtitle={numeral(3000).format('$0,0.00')}
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

  accountsList() {
    return this.props.accounts.map((account, index) => <BudgetAccountListItem {...account} key={index} />);
  }

}

module.exports = connect(mapStateToProps)(BudgetAccountsContainer);
