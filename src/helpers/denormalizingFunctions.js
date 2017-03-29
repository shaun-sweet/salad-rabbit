import db from '../store'

exports.denormalizeData = (data, callback) => {
  let store = db.getState();
  if (data.constructor === Array) {
    return data.map( dataId => callback(dataId, store) );
  }else if (data.constructor === Object) {
    return Object.keys(data).map( dataId => callback(dataId, store));
  }else {
    throw new Error("Data passed must be either an array or object");
  }
}

exports.openAccountsCallback = (id, store) => {
  return store.accounts[id];
}

exports.transactionsCallback = (id, store) => {
  let transaction = {...store.transactions[id]};
  transaction.category = store.categories[transaction.category];
  transaction.account = store.accounts[transaction.account];
  return transaction;
}

exports.masterCategoriesCallback = (id, store) => {
  return {...store.masterCategories[id], categories: store.masterCategories[id].categories.map((categoryId) => store.categories[categoryId])}
}
