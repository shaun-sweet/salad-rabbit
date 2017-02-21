import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import axios from 'axios'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
injectTapEventPlugin();

import { createStore, combineReducers, applyMiddleware } from 'redux'

const accountsReducer = (state=[], action) => {
  switch (action.type) {
    case "ADD_ACCOUNT":
      state = state.concat([action.payload])
      break;
  }
  return state;
}

const transactionsReducer = (state=[], action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      state = state.concat([action.payload])
      break;

  }
  return state;
}

const categoriesReducer = (state=[], action) => {
  return state;
}
const reducers = combineReducers({
  accounts: accountsReducer,
  transactions: transactionsReducer,
  categories: categoriesReducer,
})

const middleware = applyMiddleware(thunk, logger())
const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log('store update: ', store.getState());
});

store.dispatch((dispatch) => {
  dispatch({type: "ADD_ACCOUNT", payload: {
    name: "Checking",
    type: "checking",
    balance: 100000,
    note: "String"
  }});
  axios.get("http://rest.learncode.academy/api/wstern/users")
    .then((response) => {
      dispatch({type: "ADD_USERS", payload: response.data})
    })
});

store.dispatch({type: "ADD_TRANSACTION", payload: {
  account: "Checking",
  date: Date.now,
  payee: "Dominos",
  category: "Food",
  memo: "twas good",
  outflow: 30.05,
  inflow: null,
  cleared: true
}})







class App extends Component {

  constructor() {
    super();
    this.state = {

      };

  }

  render() {
    return (
      <h1> Hello World</h1>
    );
  }
}

export default App;
