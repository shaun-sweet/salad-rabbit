import React, { Component } from 'react'
import { Link } from 'react-router'
import MenuItem from 'material-ui/MenuItem'

export default class NavButton extends Component {

  render() {
    return (
      <Link style={{textDecoration: 'none'}} to={this.props.to} label={this.props.label}>
        <MenuItem primaryText={this.props.label} leftIcon={this.props.icon} />
      </Link>
    );
  }
}
