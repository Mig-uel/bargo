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
  const prevURL = '/products'
  const nextURL = '/products'

  return {
    prevURL,
    nextURL,
  }
}
