export default function reducer(state=[], action) {
  // eslint-disable-next-line
  switch (action.type) {
    case "ADD_CATEGORY":
      state = state.concat([action.payload])
      break;
  }
  return state;
}
