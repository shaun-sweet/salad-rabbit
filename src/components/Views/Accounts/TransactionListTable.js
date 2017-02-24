import React, { Component } from 'react'
import {Table, Column, Cell} from 'fixed-data-table';

export default class TransactionListTable extends Component {

  render() {
    return (
      <Table
        rowsCount={50}
        rowHeight={50}
        width={600}
        height={600}>
        <Column
          cell={<Cell>Basic content</Cell>}
          width={200}
          isResizeable={true}
        />
        <Column
          cell={<Cell>Basic content</Cell>}
          width={200}
          isResizeable={true}
        />
        <Column
          cell={<Cell>Basic content</Cell>}
          width={200}
          isResizeable={true}
        />
        <Column
          cell={<Cell>Basic content</Cell>}
          width={200}
          isResizeable={true}
        />
        <Column
          cell={<Cell>Basic content</Cell>}
          width={200}
          isResizeable={true}
        />
        <Column
          cell={<Cell>Basic content</Cell>}
          width={200}
          isResizeable={true}
        />
        <Column
          cell={<Cell>Basic content</Cell>}
          width={200}
          isResizeable={true}
        />
      </Table>
    );
  }
}
