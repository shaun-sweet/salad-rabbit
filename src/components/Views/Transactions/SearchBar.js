import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      dataSource: ["test", "dicks", "kkkkk", "trump is pee pee"]
    }
  }

  render() {
    return (
      <div className='SearchBar'>
        <AutoComplete
          hintText="Search Transactions"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
      </div>
    );
  }

}
