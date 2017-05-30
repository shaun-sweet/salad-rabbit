var Dropbox = require('dropbox');

class DropboxApiCall {

  constructor(config) {
    // Dropbox SDK
    this.dbx = config.dbx;
  }

  getStore() {
    return this.dbx.filesDownload({path: '/salad-rabbit'});
  }

  writeToStore(data) {
    return this.dbx.filesUpload({path: '/salad-rabbit', contents: JSON.stringify(data), mode: 'overwrite' });
  }

}

export new DropboxApiCall({
  dbx: new Dropbox({ accessToken: 'mTtcTIR-PiAAAAAAAAAACxx08uJubrLkc8ZlkSN7-4z7N1ugijkuAgz1FlF8S_Ao' })
});
