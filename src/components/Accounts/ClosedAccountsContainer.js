import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';

var mapStateToProps = function(store) {
  return {
    closedAccounts: store.closedAccounts,
    accounts: store.accounts
  };
}

export default class ClosedAccountsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {
    let closedAccounts = this.denormalizeClosedAccounts();
    let closedAccountsList = closedAccounts.map(function(account, index){
      return <li key={index}>{account.name}</li>
    });
    return (
      <Card className="closed-accounts-container" expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Closed Accounts"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardMedia
          expandable={true}
        >
        </CardMedia>
        <CardText expandable={true}>

          <ul>
            {closedAccountsList}
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

 denormalizeClosedAccounts() {
   return this.props.closedAccounts.map((accountId, index) => {
     return this.props.accounts[accountId];
   });
 }

}

module.exports = connect(mapStateToProps)(ClosedAccountsContainer);
