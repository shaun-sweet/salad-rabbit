import React, { Component } from 'react'
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';

export default class ClosedAccountsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {
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
           Closed Accounts Here
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

}
