import React, { Component } from 'react'
import { connect } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { addAccount } from '../actions/accountsActions'
import '../styles/app.css'
injectTapEventPlugin();
var mapStateToProps = function(store) {
  return {
    accounts: store.accounts
  };
}

class App extends Component {

  componentWillMount() {
    this.props.dispatch(addAccount())
  }

  render() {
    if (this.props.accounts[0]) {
      return (<h1>{this.props.accounts[0].name}</h1>);
    } else {
      return (
        <h1> Hello World</h1>
      );
    }

  }
}
module.exports = connect(mapStateToProps)(App);
