import { CartItemsList, CartTotals } from '@/components/cart'
import { SectionTitle } from '@/components/landing'
import { Button } from '@/components/ui/button'
import { useAppSelector } from '@/store/hooks'
import { Link } from 'react-router-dom'

const Cart = () => {
  const user = useAppSelector((state) => state.user.user)

  const numItemsInCart = useAppSelector((state) => state.cart.numItemsInCart)

  if (!numItemsInCart)
    return (
      <>
        <SectionTitle text='Cart is Empty' />

        <Button asChild className='mt-8 w-full md:w-40'>
          <Link to='/products'>Go to Products</Link>
        </Button>
      </>
    )

  return (
    <>
      <SectionTitle text='Shopping Cart' />

      <div className='mt-8 grid gap-8 lg:grid-cols-12'>
        {/* CART ITEMS LIST */}
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>

        {/* CART TOTALS */}
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals />
          <Button asChild className='mt-8 w-full'>
            {user ? (
              <Link to='/checkout'>Checkout</Link>
            ) : (
              <Link to='/login'>Login to Checkout</Link>
            )}
          </Button>
        </div>
      </div>
    </>
  )
}
export default Cart
