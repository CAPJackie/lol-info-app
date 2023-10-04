export function buildPagination<T>(
  items: T[],
  page: number,
  itemsPerPage: number,
) {
  return items.slice((page - 1) * itemsPerPage, page * itemsPerPage);
}
