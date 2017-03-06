import React from 'react'

const Transaction = (transObj) => (
  <div className="row">
    <div className="cell">
      {transObj.account}
    </div>
    <div className="cell">
      {transObj.date}
    </div>
    <div className="cell">
      {transObj.payee}
    </div>
    <div className="cell">
      {transObj.category}
    </div>
    <div className="cell">
      {transObj.memo}
    </div>
    <div className="cell">
      {transObj.outflow}
    </div>
    <div className="cell">
      {transObj.inflow}
    </div>
    <div className="cell">
      {transObj.cleared}
    </div>
  </div>
)

module.exports = Transaction;
