
// new reducers
export default function reducer(state={
  "1": {
    id: 1,
    name: "Checking",
    type: "checking",
    balance: 100000,
    note: "string"
  }
}, action) {
  // eslint-disable-next-line
  switch (action.type){
  	case "ADD_ACCOUNT":
  		state = {...state, ...action.payload};
  	break;
    case "UPDATE_ACCOUNT_NAME":
      state = {...state, ...action.payload};
    break;
  }
  return state;
}
