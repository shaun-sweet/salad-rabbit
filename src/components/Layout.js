import React, {Component} from "react";
import {connect} from "react-redux";
import injectTapEventPlugin from "react-tap-event-plugin";
import Navigation from "./Navigation/NavigationContainer";
import Paper from "material-ui/Paper";
import BudgetAccountsContainer from "./Accounts/BudgetAccounts/BudgetAccountsContainer";
import ClosedAccountsContainer from "./Accounts/ClosedAccountsContainer";
import AddAccountContainer from "./Accounts/AddAccountContainer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "../styles/css/stylesheet.css";
//testing the transaction bar, remove from this page when transaction bar is added to transactions page
import AddTransaction from "./Views/Transactions/AddTransaction";
injectTapEventPlugin();


var mapStateToProps = function(store) {
  return {
    accounts: store.accounts,
    accountsIdGenerator: store.accountsIdGenerator
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
                <AddAccountContainer accounts={this.props.accounts} accountId={this.props.accountsIdGenerator}/>
                {/*<AddTransaction />*/}
              </div>
              <Paper id='display' zDepth={1}>
                {this.props.children}
              </Paper>
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
