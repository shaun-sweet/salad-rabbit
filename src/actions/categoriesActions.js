export function addMasterCategory(master_category) {
  return {
    type: "ADD_MASTER_CATEGORY", payload: {
      ...master_category
    }
  }
}

export function addCategory(category) {
  return {
    type: "ADD_CATEGORY", payload: {
      ...category
    }
  }
}

export function addCategoryToMaster(newMasterCategory) {
  return {
    type: "ADD_CATEGORY_TO_MASTER", payload: {
      ...newMasterCategory
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
