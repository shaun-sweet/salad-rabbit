import React from 'react'

const Transaction = (props) => (
  <div className="row">
    <div className="cell">
      {props.name}
    </div>
    <div className="cell">
      {props.date}
    </div>
    <div className="cell">
      {props.payee}
    </div>
    <div className="cell">
      {props.name}
    </div>
    <div className="cell">
      {props.memo}
    </div>
    <div className="cell">
      {props.outflow}
    </div>
    <div className="cell">
      {props.inflow}
    </div>
    <div className="cell">
      {props.cleared}
    </div>
  </div>
)

module.exports = Transaction;
