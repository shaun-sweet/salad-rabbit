export default function reducer(state=3, action) {
  // eslint-disable-next-line
  switch (action.type){
  	case "INCREMENT_TRANSACTIONS_ID":
  		state ++;
  	break;
  }
  return state;
}
