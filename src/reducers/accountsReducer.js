export default function reducer(state=[], action) {
  switch (action.type) {
    case "ADD_ACCOUNT":
      state = state.concat([action.payload])
      break;
  }
  return state;
}
