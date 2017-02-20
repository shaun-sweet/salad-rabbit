import React, { Component } from 'react';
import './css/App.css';


var Dropbox = require('dropbox');
var dbx = new Dropbox({ accessToken: 'DDIAux8ajggAAAAAAAAIFMQMfRsFSEa5KdP45To_6wW5iFJrtQfNtkeXwTxvzRce' });
// var reader = new FileReader();
// reader.addEventListener("loadend", function() {
//    // reader.result contains the contents of blob as a typed array
//    console.log(JSON.parse(reader.result));
// });
//
// dbx.filesDownload({path: '/file.salad'})
//   .then(function(response) {
//     console.log(response);
//     reader.readAsText(response.fileBlob)
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
// dbx.filesListFolder({path: ''})
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
dbx.filesUpload({
  contents: JSON.stringify({helloWorld: "vivian likes auto saving features coupled with hot reloading web servers"}),
  path: "/file.salad",
  mode: {".tag": "overwrite"},
  autorename: false,
  mute: false,

})
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
import seed from './seed';;


class App extends Component {

  constructor() {
    super();
    this.state = seed;

  }
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
