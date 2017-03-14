import moment from 'moment'

export default function reducer(state={
  "1": {
    id: 1,
    account: 1,
    date: moment().format("L"),
    payee: "Sprint",
    category: 2,
    memo: "twas cellphoney",
    outflow: 90.05,
    inflow: null,
    cleared: true
  },
  "2": {
    id: 2,
    account: 2,
    date: moment().format("L"),
    payee: "Food Place",
    category: 1,
    memo: "twas foody",
    outflow: 50.05,
    inflow: null,
    cleared: true
  }

}, action) {
  // eslint-disable-next-line
  switch (action.type){
    case "ADD_TRANSACTION":
      state = {...state, ...action.payload}
    break;
  }
  return state;
}
