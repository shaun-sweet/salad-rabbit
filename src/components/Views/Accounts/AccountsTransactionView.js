import React, { Component } from 'react'
import { connect } from 'react-redux'
import TransactionListTable from './TransactionListTable'
import RaisedButton from 'material-ui/RaisedButton';


class AccountsTransactionView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0
    }
    this.handleResize = this.handleResize.bind(this);
  }


  componentDidMount(){
    window.addEventListener("resize", this.handleResize);
    this.setState({
      width: this.refs.view_container.scrollWidth,
      height: this.refs.view_container.scrollHeight
    });
  }

  componentWillUnmount() {
    // window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <div ref="view_container" id='accounts-transaction-view'>
          <TransactionListTable width={this.state.width} height={this.state.height}   />
          <div className="transaction-controls">
            <RaisedButton className="add-transaction-button" label="Add Transaction" />
            <RaisedButton className="make-transfer-button" label="Make Transfer" />
          </div>
      </div>
    );
  }

  handleResize(e) {
    this.setState({
      width: this.refs.view_container.scrollWidth,
      height: this.refs.view_container.scrollHeight
    });
  }
}




var mapStateToProps = function(store) {
  return {
    accounts: store.accounts,
    transactions: store.transactions
  };
}
module.exports = connect(mapStateToProps)(AccountsTransactionView);
