export function filterByCategory(list, category) {
  return !category ? list : list.filter((item) => item.category == category);
}
