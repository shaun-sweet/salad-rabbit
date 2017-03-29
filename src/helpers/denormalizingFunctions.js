import db from '../store'
// export function denormalizeOpenAccounts() {
//   return this.props.openAccounts.map((accountId) => {
//     return this.props.accounts[accountId];
//   });
// }

exports.denormalizeData = (data, callback) => {
  let store = db.getState();
  console.log(store);
  if (data.constructor === Array) {
    return data.map( dataId => callback(dataId, store) );
  }else if (data.constructor === Object) {
    return Object.keys(data).map( dataId => callback(dataId, store));
  }else {
    throw new Error("Data passed must be either an array or object");
  }
}

exports.getOpenAccounts = (openAccountId, store) => {
  return store.accounts[openAccountId];
}
