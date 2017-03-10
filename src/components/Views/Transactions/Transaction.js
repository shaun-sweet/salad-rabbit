import React from 'react'
import { usd, normalizeCurrency } from '../../../helpers'

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
      {usd(props.outflow)}
    </div>
    <div className="cell">
      {usd(props.inflow)}
    </div>
    <div className="cell">
      {props.cleared}
      {normalizeCurrency("12.1d231541afgdafd")}
    </div>
  </div>
)

module.exports = Transaction;
