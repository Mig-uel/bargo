import {
  customFetch,
  type ProductsResponseWithParams,
  type ProductsResponse,
} from '@/utils'
import type { LoaderFunction } from 'react-router-dom'

const url = '/products'

const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponseWithParams> => {
  // create url from request using WebAPI URL
  const newURL = new URL(request.url)

  // create params object from `newURL` searchParams entries
  const params = Object.fromEntries([...newURL.searchParams.entries()])

  const res = await customFetch<ProductsResponse>(url, {
    params,
  })

  return {
    ...res.data,
    params,
  }
}

export default loader
