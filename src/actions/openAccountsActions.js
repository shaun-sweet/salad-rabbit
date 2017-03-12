export function addOpenAccount(accountId) {
  return {
    type: "ADD_OPEN_ACCOUNT", payload: accountId
  }
}

export function closeOpenAccount(updatedAccounts) {
  return {
    type: "CLOSE_OPEN_ACCOUNT", payload: updatedAccounts
  }
}
