var Dropbox = require('dropbox');
var dbx = new Dropbox({ accessToken: 'mTtcTIR-PiAAAAAAAAAACxx08uJubrLkc8ZlkSN7-4z7N1ugijkuAgz1FlF8S_Ao' });
dbx.filesListFolder({path: ''})
  .then(function(response) {
    // console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });

//path: filename to save as
//contents: what's in the file
//mode: what to do if a file with that name already exists
dbx.filesUpload({path: '/salad-rabbit', contents: JSON.stringify({"one": "1", "two": "2"}), mode: 'overwrite' })
  .then(function(response) {
    // console.log(response);
  })
  .catch(function(error) {
    console.error(error);
  });

var downloadedJSON;
dbx.filesDownload({path: '/salad-rabbit'})
  .then(function(response){
    downloadedJSON = JSON.parse(response.fileBinary);
    console.log(downloadedJSON);
    console.log(downloadedJSON.one);
  })
  .catch(function(error){
    console.error(error);
  })
