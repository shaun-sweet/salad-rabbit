export function addAccount() {
  return {
    type: "ADD_ACCOUNT", payload: {
      name: "Checking",
      type: "checking",
      balance: 100000,
      note: "String"
    }
  }
}
