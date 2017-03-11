export default function reducer(state=2, action) {
  // eslint-disable-next-line
  switch(action.type){
  	case 'INCREMENT_MASTER_CATEGORY_ID':
  		state++;
  	break;
  }
  return state;
}
