export function addAccount(account) {
  return {
    type: "ADD_ACCOUNT", payload: {
      ...account
    }
  }
}

export function updateAccountName(account) {
  return {
    type: "UPDATE_ACCOUNT_NAME", payload: {
      ...account
    }
  }
}
