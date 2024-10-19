import { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { Button } from '../ui/button'
import { LayoutGrid, List } from 'lucide-react'
import { Separator } from '../ui/separator'
import { ProductsGrid } from '../landing'
import { ProductsList } from './'
import type { ProductsResponse } from '@/utils'

const ProductsContainer = () => {
  const { meta } = useLoaderData() as ProductsResponse
  const totalProducts = meta.pagination.total

  const [layout, setLayout] = useState<'grid' | 'list'>('grid')

  return (
    <>
      {/* HEADER */}
      <section>
        <div className='flex justify-between items-center mt-8'>
          <h4 className='font-medium text-md'>
            {totalProducts} Product
            {(totalProducts > 1 || totalProducts === 0) && 's'}
          </h4>

          <div className='flex gap-x-2'>
            <Button
              size='icon'
              onClick={() => setLayout('grid')}
              variant={layout === 'grid' ? 'default' : 'ghost'}
            >
              <LayoutGrid />
            </Button>
            <Button
              size='icon'
              onClick={() => setLayout('list')}
              variant={layout === 'list' ? 'default' : 'ghost'}
            >
              <List />
            </Button>
          </div>
        </div>

        <Separator className='mt-4' />
      </section>

      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <div className='mt-10'>
            <h5 className='text-2xl'>No products matched your search</h5>
            <Button asChild className='mt-4'>
              <Link to='/products'>Reset Search</Link>
            </Button>
          </div>
        ) : layout === 'grid' ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  )
}
export default ProductsContainer
