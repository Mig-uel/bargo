import { Form, Link, useLoaderData } from 'react-router-dom'
import { Button } from '../ui/button'
import { FormInput, FormRange, FormSelect } from '../inputs'
import type { ProductsResponseWithParams } from '@/utils'

const Filters = () => {
  const { params, meta } = useLoaderData() as ProductsResponseWithParams

  return (
    <Form className='border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* SEARCH */}
      <FormInput name='search' type='search' defaultValue={params.search} />

      {/* CATEGORIES */}
      <FormSelect
        label='Select Category'
        name='category'
        options={meta.categories}
        defaultValue={params.category}
      />

      {/* COMPANIES */}
      <FormSelect
        name='company'
        label='Select Company'
        options={meta.companies}
        defaultValue={params.company}
      />

      {/* ORDER BY */}
      <FormSelect
        name='order'
        label='order by'
        options={['a-z', 'z-a', 'high', 'low']}
        defaultValue={params.order}
      />

      {/* PRICE RANGE */}
      <FormRange label='price' name='price' defaultValue={params.price} />

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
