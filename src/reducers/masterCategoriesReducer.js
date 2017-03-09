export default function reducer(state={
  "1": {
    id: 1,
    name: "Monthly Bills",
    categories: [1,2],
    hidden: false
  }
}, action) {
  switch(action.type){
  	case 'ADD_MASTER_CATEGORY':
  		state = {...state, ...action.payload};
  	break;
  }

  return state;
}
