import { NextRouter } from "next/router";

export default function getPaginationListConfig(
  numberOfPages: number,
  router: NextRouter,
) {
  const page = Number(router.query.page) || 1;
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
