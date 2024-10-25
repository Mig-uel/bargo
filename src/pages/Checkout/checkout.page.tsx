import { useEffect } from 'react'

import { SectionTitle } from '@/components/landing'
import { Button } from '@/components/ui/button'
import { useAppSelector } from '@/store/hooks'
import { Link, useNavigate } from 'react-router-dom'
import { CheckoutForm } from '@/components/checkout'
import { CartTotals } from '@/components/cart'

const Checkout = () => {
  const navigate = useNavigate()
  const user = useAppSelector((state) => state.user.user)
  const cartTotal = useAppSelector((state) => state.cart.cartTotal)

  useEffect(() => {
    if (!user)
      return navigate('/login', {
        replace: true,
      })
  }, [navigate, user])

  if (!cartTotal)
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
      <SectionTitle text='Checkout' />

      <div className='mt-8 grid gap-8 md:grid-cols-2 items-start'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  )
}
export default Checkout
