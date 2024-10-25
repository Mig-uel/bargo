import { OrdersResponse } from '@/utils'
import { useLoaderData } from 'react-router-dom'

const Orders = () => {
  const { meta, data: orders } = useLoaderData() as OrdersResponse

  console.log(meta)

  return <div>Orders</div>
}
export default Orders
