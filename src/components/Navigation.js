import React, { Component } from 'react'

export default class Navigation extends Component {

  render() {
    return (
        <ul>
          {this.props.children}
        </ul>
    );
  }
}
