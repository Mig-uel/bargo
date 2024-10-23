import { useAppSelector } from '@/store/hooks'
import { Card } from '../ui/card'
import { FirstCol, FourthCol, SecondCol, ThirdCol } from '../cart'

const CartItemsList = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems)

  return (
    <div>
      {cartItems.map((item) => {
        const { amount, cartID, company, image, price, productColor, title } =
          item

        return (
          <Card
            key={item.cartID}
            className='flex flex-col gap-y-4 sm:flex-row flex-wrap p-6 mb-8'
          >
            <FirstCol image={image} title={title} />
            <SecondCol
              title={title}
              company={company}
              productColor={productColor}
            />
            <ThirdCol amount={amount} cartID={cartID} />
            <FourthCol price={price} />
          </Card>
        )
      })}
    </div>
  )
}
export default CartItemsList
