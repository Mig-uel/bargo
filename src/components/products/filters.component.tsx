import { Form, Link, useLoaderData } from 'react-router-dom'

import { Button } from '../ui/button'
import type { ProductsResponseWithParams } from '@/utils'
import { FormInput } from '../inputs'

const Filters = () => {
  const { params } = useLoaderData() as ProductsResponseWithParams

  return (
    <Form className='border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* search input */}
      <FormInput name='search' type='search' defaultValue={params.search} />

      <Button type='submit' size='sm' className='self-end mb-2'>
        Search
      </Button>

      <Button
        type='button'
        size='sm'
        asChild
        variant='outline'
        className='self-end mb-2'
      >
        <Link to='/products'>Reset</Link>
      </Button>
    </Form>
  )
}
export default Filters
