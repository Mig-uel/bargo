import { type OrdersResponse } from '@/utils'
import { useLoaderData } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

const OrdersList = () => {
  const { meta, data: orders } = useLoaderData() as OrdersResponse

  return (
    <div className='mt-16'>
      <h4 className='mb-4 capitalize'>total orders: {meta.pagination.total}</h4>

      <Table>
        <TableCaption>A list of your recent orders</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className='w-[100px]'>Product</TableHead>
            <TableHead className='w-[100px]'>Cost</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((order) => {
            const { id } = order
            const { address, createdAt, name, numItemsInCart, orderTotal } =
              order.attributes

            return (
              <TableRow key={id}>
                <TableCell>{name}</TableCell>
                <TableCell>{address}</TableCell>
                <TableCell className='text-center'>{numItemsInCart}</TableCell>
                <TableCell>{orderTotal}</TableCell>
                <TableCell>{new Date(createdAt).toDateString()}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
export default OrdersList
