import React, { Component } from 'react';
import { Link } from 'react-router'

class NavLink extends Component {

  constructor(props) {
    super(props);
    this.state = {

      };

  }

  render() {
    return (
      <li>
        <Link to={this.props.to}>{this.props.label}</Link>
      </li>
    );
  }
}

export default NavLink;
