import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NavButton extends Component {

  render() {
    return (
      <li>
        <Link to={this.props.linkTo}>{this.props.label}</Link>
      </li>
    );
  }
}
