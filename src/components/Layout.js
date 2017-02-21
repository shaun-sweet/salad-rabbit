import React, { Component } from 'react'
import { connect } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { addAccount } from '../actions/accountsActions'
import Navigation from './Navigation'
import NavButton from './NavButton'
import '../styles/app.css'
injectTapEventPlugin();
var mapStateToProps = function(store) {
  return {
    accounts: store.accounts
  };
}

class Layout extends Component {

  componentWillMount() {
    this.props.dispatch(addAccount())
  }

  render() {
      return (
        <main>
          <nav id='left-side-bar'>
            <Navigation>
              <NavButton linkTo="/" label="Budget" />
              <NavButton linkTo="accounts" label="All Accounts" />
            </Navigation>
          </nav>
          <section id='display'>
            {this.props.children}
          </section>
        </main>
      );
  }
}
module.exports = connect(mapStateToProps)(Layout);
