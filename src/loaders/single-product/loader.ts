import { customFetch, SingleProductResponse } from '@/utils'
import { type LoaderFunction } from 'react-router-dom'

const loader: LoaderFunction = async ({
  params,
}): Promise<SingleProductResponse> => {
  const res = await customFetch<SingleProductResponse>(`/products/${params.id}`)

  return {
    ...res.data,
  }
}

export default loader
