import { useLoaderData, useLocation } from 'react-router-dom'
import {
  Pagination as PaginationUI,
  PaginationItem,
  PaginationLink,
  PaginationContent,
  PaginationPrevious,
  PaginationNext,
} from '../ui/pagination'

import {
  constructPrevOrNextURL,
  constructURL,
  type ProductsResponseWithParams,
} from '@/utils'

const Pagination = () => {
  const { meta } = useLoaderData() as ProductsResponseWithParams

  const {
    pagination: { page, pageCount },
  } = meta

  const { search, pathname } = useLocation()

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1)

  if (pageCount < 2) return null

  const renderPagination = pages.map((pageNumber) => {
    const isActive = pageNumber === page

    // construct url for all the pageNumbers in the array.
    const url = constructURL({ pageNumber, search, pathname })

    // for each pageNumber in the array, we return a pagination item with its constructed url
    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink to={url} isActive={isActive}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    )
  })

  const { prevURL, nextURL } = constructPrevOrNextURL({
    currentPage: page,
    pageCount,
    pathname,
    search,
  })

  return (
    <PaginationUI className='mt-16'>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={prevURL} />
        </PaginationItem>
        {renderPagination}
        <PaginationItem>
          <PaginationNext to={nextURL} />
        </PaginationItem>
      </PaginationContent>
    </PaginationUI>
  )
}
export default Pagination
