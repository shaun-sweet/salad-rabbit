import React, { Component } from 'react';
import './App.css';

var Dropbox = require('dropbox');
var dbx = new Dropbox({ accessToken: 'DDIAux8ajggAAAAAAAAIFMQMfRsFSEa5KdP45To_6wW5iFJrtQfNtkeXwTxvzRce' });
var reader = new FileReader();
reader.addEventListener("loadend", function() {
   // reader.result contains the contents of blob as a typed array
   console.log(JSON.parse(reader.result));
});

dbx.filesDownload({path: '/file.salad'})
  .then(function(response) {
    console.log(response);
    reader.readAsText(response.fileBlob)
  })
  .catch(function(error) {
    console.log(error);
  });
dbx.filesListFolder({path: ''})
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
// dbx.filesUpload({
//   contents: JSON.stringify({helloWorld: "this is a test"}),
//   path: "/file.salad",
//   mode: {".tag": "overwrite"},
//   autorename: false,
//   mute: false,
//
// })
//   .then((response) => console.log(response))
//   .catch((error) => console.error(error));



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


















{
  closed_accounts: [
    {
      name: "Checking",
      type: "Checking",
      balance: 000,
      note: "String"
    }
  ]
  accounts: [
    {
      name: "Checking",
      type: "Checking",
      balance: 100000,
      note: "String"
    },
    {
      name: "Credit Card",
      type: "credit card",
      balance: -100,
      note: "String"
    }
  ]
  transactions: [
    {
      account: "Checking",
      date: Date.now,
      payee: "Dominos",
      category: "Food",
      memo: "twas good",
      outflow: 30.05,
      inflow: null,
      cleared: true
    }
  ],
  categories: [
    {
      master_category: "Monthly Bills",
      sub_categories: [{
        name: "Rent",
        budgeted_amount: 500
      }]
    }
  ]
}
