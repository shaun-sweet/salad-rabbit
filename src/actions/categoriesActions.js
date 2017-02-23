export function addCategory(category) {
  return {
    type: "ADD_CATEGORY", payload: {
      ...category
    }
  }
}
