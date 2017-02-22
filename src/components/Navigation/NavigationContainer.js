import React, { Component } from 'react'
import NavButton from './NavButton'

export default class Navigation extends Component {

  render() {
    return (
        <ul>
          <NavButton linkTo="/" label="Budget" />
          <NavButton linkTo="accounts" label="All Accounts" />
        </ul>
    );
  }
}
