export default function reducer(state=2, action) {
  // eslint-disable-next-line
  switch (action.type){
  	case "INCREMENT_ACCOUNTS_ID":
  		state ++;
  	break;
  }
  return state;
}
