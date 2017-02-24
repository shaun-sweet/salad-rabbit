export default function reducer(state=[], action) {
  // eslint-disable-next-line
  switch (action.type) {
    case "ADD_CATEGORY":
      state = state.concat([action.payload])
      break;
    case "ADD_SUBCATEGORY":
      //make copy of old category
   	  var category = {...state[action.payload.index]};
   	  //push the new subcategory onto the category
   	  category.subcategories.push(action.payload.subcategory);
   	  //add the rest of the array to either side of the changed master category
      state = state.slice(0, action.payload.index).concat([category]).concat(state.slice(action.payload.index + 1));
      break;
    case "CHANGE_BUDGETED_AMOUNT":
      //make copy of old master category of the subcategory you're changing
      var category = {...state[action.payload.indexParent]};
      //set the budgeted amount in the subcategory to the new value
      category.subcategories[action.payload.index].budgeted = action.payload.value;
      //add the rest of the array to either side of the changed master category
      state = state.slice(0, action.payload.indexParent).concat([category]).concat(state.slice(action.payload.indexParent + 1));
      break;
  }

  return state;
}
