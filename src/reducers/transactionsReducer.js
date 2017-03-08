// export default function reducer(state=[{
//   account: "Checking",
//   date: Date.now,
//   payee: "Dominos",
//   category: "Food",
//   memo: "twas good",
//   outflow: 30.05,
//   inflow: null,
//   cleared: true
// }], action) {
//   // eslint-disable-next-line
//   switch (action.type) {
//     case "ADD_TRANSACTION":
//       state = state.concat([action.payload])
//       break;
//   }
//   return state;
// }

// new reducer

export default function reducer(state={
  "1": {
    id: 1,
    account: 1,
    date: Date.now,
    payee: "Sprint",
    category: 2,
    memo: "twas cellphoney",
    outflow: 90.05,
    inflow: null,
    cleared: true
  }
}, action) {
  // eslint-disable-next-line

  return state;
}
