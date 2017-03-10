export default function reducer(state=3, action) {
  switch(action.type){
  	case 'INCREMENT_CATEGORY_ID':
  		state++;
  	break;
  }
  return state;
}
