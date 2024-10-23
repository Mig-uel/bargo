import { useAppSelector } from '@/store/hooks'
import { formatPrice } from '@/utils'
import { Separator } from '../ui/separator'
import { Card, CardTitle } from '../ui/card'

function CartTotalRow({
  label,
  amount,
  lastRow,
}: {
  label: string
  amount: number
  lastRow?: boolean
}) {
  return (
    <>
      <p className='flex justify-between text-sm capitalize'>
        <span>{label}</span>
        <span>{formatPrice(amount)}</span>
      </p>
      {lastRow ? null : <Separator className='my-2' />}
    </>
  )
}

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useAppSelector(
    (state) => state.cart
  )

  return (
    <Card className='p-8 bg-muted'>
      <CartTotalRow amount={cartTotal} label='subtotal' />
      <CartTotalRow amount={shipping} label='shipping' />
      <CartTotalRow amount={tax} label='tax' />

      <CardTitle className='mt-8'>
        <CartTotalRow amount={orderTotal} label='order total' lastRow />
      </CardTitle>
    </Card>
  )
}
export default CartTotals
