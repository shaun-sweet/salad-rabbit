import React from 'react'

const Transaction = (props) => (
  <div className="row" key={props.id}>
    <div className="cell">
      {props.account.name}
    </div>
    <div className="cell">
      {props.date}
    </div>
    <div className="cell">
      {props.payee}
    </div>
    <div className="cell">
      {props.category.name}
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
