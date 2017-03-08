export function addMasterCategory(master_category) {
  return {
    type: "ADD_MASTER_CATEGORY", payload: {
      ...master_category
    }
  }
}

export function addCategory(category, index) {
  return {
    type: "ADD_CATEGORY", payload: {
      category: category,
      index: index
    }
  }
}

export function changeBudgetedAmount(value, indexParent, index) {
  return {
    type: "CHANGE_BUDGETED_AMOUNT", payload: {
      value: value,
      indexParent: indexParent,
      index: index
    }
  }
}
