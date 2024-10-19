import { Filters, Pagination, ProductsContainer } from '@/components/products'

const Products = () => {
  return (
    <>
      <Filters />

      <ProductsContainer />

      <Pagination />
    </>
  )
}
export default Products
