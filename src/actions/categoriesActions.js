export function addCategory(category) {
  return {
    type: "ADD_CATEGORY", payload: {
      ...category
    }
  }
}

export function addSubcategory(subcategory, index) {
  console.log(subcategory, index);
  return {
    type: "ADD_SUBCATEGORY", payload: {
      subcategory: subcategory,
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
