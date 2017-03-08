export default function reducer(state=[{
  name: "Checking",
  type: "checking",
  balance: 100000,
  note: "String"
}], action) {
  // eslint-disable-next-line
  switch (action.type) {
    case "ADD_ACCOUNT":
      state = state.concat([action.payload])
      break;
  }
  return state;
}
