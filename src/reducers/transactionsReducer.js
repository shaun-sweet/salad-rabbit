export default function reducer(state=[{
  account: "Checking",
  date: Date.now,
  payee: "Dominos",
  category: "Food",
  memo: "twas good",
  outflow: 30.05,
  inflow: null,
  cleared: true
}], action) {
  // eslint-disable-next-line
  switch (action.type) {
    case "ADD_TRANSACTION":
      state = state.concat([action.payload])
      break;
  }
  return state;
}
