import { useAppDispatch } from '@/store/hooks'
import { Button } from '../ui/button'
import { formatPrice } from '@/utils'
import { editItem, removeItem } from '@/store/cart/cartSlice'
import { SelectProductAmount } from '../single-product'
import { Mode } from '../single-product/select-product-amount.component'

export const FirstCol = ({
  image,
  title,
}: {
  image: string
  title: string
}) => {
  return (
    <img
      src={image}
      alt={title}
      className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover'
    />
  )
}

export const SecondCol = ({
  company,
  productColor,
  title,
}: {
  company: string
  productColor: string
  title: string
}) => {
  return (
    <div className='sm:ml-4 md:ml-12 sm:w-48'>
      <h3 className='capitalize font-medium'>{title}</h3>
      <h4 className='mt-2 capitalize text-sm'>{company}</h4>

      <p className='mt-4 text-sm capitalize flex items-center gap-x-2'>
        color:{' '}
        <span
          style={{
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            backgroundColor: productColor,
          }}
        ></span>
      </p>
    </div>
  )
}

export const ThirdCol = ({
  amount,
  cartID,
}: {
  amount: number
  cartID: string
}) => {
  const dispatch = useAppDispatch()

  const removeItemFromCart = () => dispatch(removeItem(cartID))

  const setItemAmount = (value: number) =>
    dispatch(editItem({ amount: value, cartID }))

  return (
    <div>
      <SelectProductAmount
        amount={amount}
        setAmount={setItemAmount}
        mode={Mode.CartItem}
      />
      <Button
        variant='link'
        className='-ml-4 capitalize'
        onClick={removeItemFromCart}
      >
        remove
      </Button>
    </div>
  )
}

export const FourthCol = ({ price }: { price: string }) => {
  return <p className='font-medium sm:ml-auto'>{formatPrice(price)}</p>
}
