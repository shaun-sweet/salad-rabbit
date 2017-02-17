import React, { Component } from 'react';
import './App.css';

var Dropbox = require('dropbox');
var dbx = new Dropbox({ accessToken: 'DDIAux8ajggAAAAAAAAIFMQMfRsFSEa5KdP45To_6wW5iFJrtQfNtkeXwTxvzRce' });
dbx.filesListFolder({path: ''})
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
