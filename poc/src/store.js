import { createStore } from 'redux'
import seed from './seed'
const reducer = function(state, action) {
  return state;
}

const store = createStore(reducer, seed);

store.subscribe(() => {
  console.log('store update: ', store.getState());
});

store.dispatch({type: "INC", payload: 1});
