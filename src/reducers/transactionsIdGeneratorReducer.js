export default function reducer(state=2, action) {
  switch (action.type){
  	case "INCREMENT_TRANSACTIONS_ID":
  		state ++;
  	break;
  }
  return state;
}
