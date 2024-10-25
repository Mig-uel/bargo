import { ComplexPagination } from '@/components'
import { SectionTitle } from '@/components/landing'
import OrdersList from '@/components/orders/orders-list.component'
import { Button } from '@/components/ui/button'
import { OrdersResponse } from '@/utils'
import { Link, useLoaderData } from 'react-router-dom'

const Orders = () => {
  const { meta } = useLoaderData() as OrdersResponse

  if (meta.pagination.total < 1)
    return (
      <>
        <SectionTitle text='No Orders' />

        <Button asChild className='mt-8 w-full md:w-40'>
          <Link to='/products'>Go to Products</Link>
        </Button>
      </>
    )

  return (
    <>
      <SectionTitle text='Your Orders' />

      <OrdersList />

      <ComplexPagination />
    </>
  )
}
export default Orders
