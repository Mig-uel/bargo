type ConstructURLParam = {
  pageNumber: number
  search: string
  pathname: string
}

export const constructURL = ({
  pageNumber,
  pathname,
  search,
}: ConstructURLParam): string => {
  const searchParams = new URLSearchParams(search)

  searchParams.set('page', pageNumber.toString())

  return `${pathname}?${searchParams.toString()}`
}

type ConstructPrevOrNextParams = {
  currentPage: number
  pageCount: number
  search: string
  pathname: string
}

export const constructPrevOrNextURL = ({
  currentPage,
  pageCount,
  pathname,
  search,
}: ConstructPrevOrNextParams): { prevURL: string; nextURL: string } => {
  let prevPage = currentPage - 1
  if (prevPage < 1) prevPage = pageCount

  let nextPage = currentPage + 1
  if (nextPage > pageCount) nextPage = 1

  const prevURL = constructURL({ pageNumber: prevPage, search, pathname })
  const nextURL = constructURL({ pageNumber: nextPage, pathname, search })

  return {
    prevURL,
    nextURL,
  }
}
