import React, { Component } from 'react'

export default class Transaction extends Component {
  render() {
    return (
      <div className="row">
        <div className="cell">
          {this.props.account}
        </div>
        <div className="cell">
          {this.props.date}
        </div>
        <div className="cell">
          {this.props.payee}
        </div>
        <div className="cell">
          {this.props.category}
        </div>
        <div className="cell">
          {this.props.memo}
        </div>
        <div className="cell">
          {this.props.outflow}
        </div>
        <div className="cell">
          {this.props.inflow}
        </div>
        <div className="cell">
          {this.props.cleared}
        </div>
      </div>
    )
  }
}
