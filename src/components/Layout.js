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

  addAccountCallback() {
    return this.props.dispatch(addAccount())
  }

  render() {
      return (
        <div className="app-container">
          <main>
            <div className='left-side-bar'>
              <Navigation />
              <OnBudgetAccounts />
              <ClosedAccounts />
              <AddAccountButton onClick={this.addAccountCallback.bind(this)}/>
            </div>
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
