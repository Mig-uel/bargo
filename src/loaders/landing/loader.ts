import { customFetch, type ProductsResponse } from '@/utils'
import type { LoaderFunction } from 'react-router-dom'

const url = '/products?featured=true'

const loader: LoaderFunction = async () => {
  const res = await customFetch<ProductsResponse>(url)

  return res
}

export default loader
