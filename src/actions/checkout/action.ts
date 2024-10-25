import { toast } from '@/hooks/use-toast'
import { clearCart } from '@/store/cart/cartSlice'
import { type ReduxStore } from '@/store/store'
import { Checkout, customFetch, formatPrice } from '@/utils'
import { redirect, type ActionFunction } from 'react-router-dom'

const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    try {
      const formData = await request.formData()

      const name = formData.get('name') as string
      const address = formData.get('address') as string

      if (!name || !address) {
        toast({ description: 'Please fill out all fields!' })
        return null
      }

      const user = store.getState().user.user

      if (!user) {
        toast({ description: 'Please login to place an order' })
        return redirect('/login')
      }

      const { cartItems, orderTotal, numItemsInCart } = store.getState().cart

      const cart: Checkout = {
        address,
        cartItems,
        chargeTotal: orderTotal,
        name,
        numItemsInCart,
        orderTotal: formatPrice(orderTotal),
      }

      await customFetch.post(
        '/orders',
        { data: cart },
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      )

      store.dispatch(clearCart())

      toast({ description: 'Order placed' })

      return redirect('/orders')
    } catch (error) {
      console.log(error)
      return null
    }
  }

export default action
