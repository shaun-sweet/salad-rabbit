import React, { Component } from 'react'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
export default class TransactionListTable extends Component {

  render() {
    return (
      <Table fixedHeader={false}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Account</TableHeaderColumn>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Payee</TableHeaderColumn>
            <TableHeaderColumn>Category</TableHeaderColumn>
            <TableHeaderColumn>Memo</TableHeaderColumn>
            <TableHeaderColumn>Outflow</TableHeaderColumn>
            <TableHeaderColumn>Inflow</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}
