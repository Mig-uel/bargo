import { useLoaderData } from 'react-router-dom'
import { FeaturedProducts, Hero } from '@/components/landing'
import type { ProductsResponse } from '@/utils'

const Landing = () => {
  const { data, meta } = useLoaderData() as ProductsResponse

  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}
export default Landing
