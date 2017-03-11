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

export function updateBudgetedAmount(updatedCategory) {
  return {
    type: "UPDATE_BUDGETED_AMOUNT", payload: {
      ...updatedCategory
    }
  }
}

export function updateCategoryName(updatedCategory) {
  return {
    type: "UPDATE_CATEGORY_NAME", payload: {
      ...updatedCategory
    }
  }
}
