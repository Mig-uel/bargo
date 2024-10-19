import { customFetch, type ProductsResponse } from '@/utils'
import type { LoaderFunction } from 'react-router-dom'

const url = '/products'

const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const res = await customFetch<ProductsResponse>(url)

  return {
    ...res.data,
  }
}

export default loader
