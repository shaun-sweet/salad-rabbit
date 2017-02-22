import React, { Component } from 'react'
import { connect } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { addAccount } from '../actions/accountsActions'
import Navigation from './Navigation'
import BudgetAccountsContainer from './BudgetAccountsContainer'
import ClosedAccountsContainer from './ClosedAccountsContainer'
import AddAccountContainer from './AddAccountContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../styles/app.css'
import '../styles/Layout.css'
injectTapEventPlugin();
var mapStateToProps = function(store) {
  return {
    accounts: store.accounts
  };
}

class Layout extends Component {

  render() {
      return (
        <MuiThemeProvider>
          <div className="app-container">
            <main>
              <div className='left-side-bar'>
                <Navigation />
                <BudgetAccountsContainer />
                <ClosedAccountsContainer />
                <AddAccountContainer />
              </div>
              <section id='display'>
                {this.props.children}
              </section>
            </main>
            <footer>
              This is the footer
            </footer>
          </div>
        </MuiThemeProvider>
      );
  }
}
module.exports = connect(mapStateToProps)(Layout);
