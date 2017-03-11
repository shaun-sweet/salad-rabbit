export default function reducer(state=[1], action) {
  // eslint-disable-next-line
  switch (action.type){
  	case "ADD_OPEN_ACCOUNT":
  		state = state.concat(action.payload);
  	break;
  }
  return state;
}
