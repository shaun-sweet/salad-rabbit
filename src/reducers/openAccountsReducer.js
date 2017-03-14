export default function reducer(state=[1,2], action) {
  // eslint-disable-next-line
  switch (action.type){
  	case "ADD_OPEN_ACCOUNT":
  		state = state.concat(action.payload);
  	break;
    case "CLOSE_OPEN_ACCOUNT":
      state = action.payload;
    break;
  }
  return state;
}
