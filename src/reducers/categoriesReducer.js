// new reducer
//
export default function reducer(state={
  "1": {
    id: 1,
    masterCategory: 1,
    name: "Rent",
    budgeted: 500,
    outflows: [],
    outflow: 0,
    inflow: 0,
    balance: 0,
    hidden: false
  },
  "2": {
    id: 2,
    masterCategory: 1,
    name: "Cell Phone",
    budgeted: 100.23,
    outflows: [1],
    outflow: 0,
    inflow: 0,
    balance: 0,
    hidden: false
  }
}, action) {
  // eslint-disable-next-line
  switch(action.type){
    case "ADD_CATEGORY":
      state = {...state, ...action.payload};
    break;
    case "UPDATE_BUDGETED_AMOUNT":
      state = {...state, ...action.payload};
    break;
    case "UPDATE_CATEGORY_NAME":
      state = {...state, ...action.payload};
    break;
    case "ADD_OUTFLOW":
      state = {...state, ...action.payload}
    break;
  }
  return state;
}
