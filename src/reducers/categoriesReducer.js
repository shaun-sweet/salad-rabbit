export default function reducer(state=[{
  name: "Monthly Bills",
  categories: [
    {
      name: "Rent",
      budgeted: 500,
      outflow: 0,
      balance: 0
    }
  ]
}], action) {
  // eslint-disable-next-line
  switch (action.type) {
    case "ADD_MASTER_CATEGORY":
      state = state.concat([action.payload])
      break;
    case "ADD_CATEGORY":
      //make copy of old master category
   	  var master_category = {...state[action.payload.index]};
   	  //push the new category onto the master category
   	  master_category.categories.push(action.payload.category);
   	  //add the rest of the array to either side of the changed master category
      state = state.slice(0, action.payload.index).concat([master_category]).concat(state.slice(action.payload.index + 1));
      break;
    case "CHANGE_BUDGETED_AMOUNT":
      //make copy of old master category of the subcategory you're changing
      var oldCategory = {...state[action.payload.indexParent]};
      //set the budgeted amount in the subcategory to the new value
      oldCategory.categories[action.payload.index].budgeted = action.payload.value;
      //add the rest of the array to either side of the changed master category
      state = state.slice(0, action.payload.indexParent).concat([oldCategory]).concat(state.slice(action.payload.indexParent + 1));
      break;
  }

  return state;
}
