export default function getPaginationListConfig(
  numberOfPages: number,
  pageFromParams: string,
) {
  const page = Number(pageFromParams) || 1;
  const range = 5;
  const totalPagesToShow = range * 2 + 1;
  let startPage, endPage;

  if (page <= 5) {
    startPage = 1;
    endPage = Math.min(6, numberOfPages);
  } else {
    startPage = page - range;
    endPage = page + range > numberOfPages ? numberOfPages : page + range;
  }

  if (page + range > numberOfPages && startPage - totalPagesToShow > 0) {
    startPage -= totalPagesToShow - (numberOfPages - page) - 1;
  }

  let list = [];
  for (let i = startPage; i <= endPage; i++) {
    list.push(i);
  }
  return { list, page, range };
}
