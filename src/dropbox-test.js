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


var downloaded_file;
//link where you want to download from.
var link = 'https://www.dropbox.com/s/mrwbq89cydtwl9q/salad-rabbit?dl=0';

//if there is no link created yet, you want to run this to create the link
if(!link){
  dbx.sharingCreateSharedLinkWithSettings({path: '/salad-rabbit'})
    .then(function(response) {
      //use the created shared link to download the file
      link = response.url;
      downloadFile(link);
    })
    .catch(function(error) {
      console.error(error);
    });
}else{
  downloadFile(link);
}

function downloadFile(url){
  dbx.sharingGetSharedLinkFile({url: url})
    .then(function(response){
      json_downloaded = JSON.parse(response.fileBinary);
      console.log(json_downloaded);
      console.log(json_downloaded["one"]);
      downloaded_file = json_downloaded;
      console.log(downloaded_file);
    })
    .catch(function(error){
      console.error(error)
    })
}
