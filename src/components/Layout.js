import React, { Component } from 'react'
import { connect } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { addAccount } from '../actions/accountsActions'
import Navigation from './Navigation'
import OnBudgetAccounts from './OnBudgetAccounts'
import ClosedAccounts from './ClosedAccounts'
import AddAccountButton from './AddAccountButton'
import '../styles/app.css'
import '../styles/Layout.css'
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
        <div className="app-container">
          <main>
            <nav className='left-side-bar'>
              <Navigation />
              <OnBudgetAccounts />
              <ClosedAccounts />
              <AddAccountButton />
            </nav>
            <section id='display'>
              {this.props.children}
            </section>
          </main>
          <footer>
            This is the footer
          </footer>
        </div>
      );
  }
}
module.exports = connect(mapStateToProps)(Layout);
