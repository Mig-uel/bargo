import { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  SelectProductAmount,
  SelectProductColor,
} from '../../components/single-product'
import { Mode } from '@/components/single-product/select-product-amount.component'
import { useAppDispatch } from '@/store/hooks'
import { addItem } from '@/store/cart/cartSlice'
import { type CartItem, formatPrice, type SingleProductResponse } from '@/utils'

const SingleProduct = () => {
  const dispatch = useAppDispatch()
  const { data: product } = useLoaderData() as SingleProductResponse

  const { colors, company, description, image, price, title } =
    product.attributes

  const dollars = formatPrice(price)

  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const cartItem: CartItem = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    amount,
    productColor,
    company,
  }

  const addToCart = () => dispatch(addItem(cartItem))

  return (
    <section>
      <div className='flex gap-x-2 h-6 items-center'>
        <Button asChild variant='link' size='sm'>
          <Link to='/'>Home</Link>
        </Button>

        <Separator orientation='vertical' />

        <Button asChild variant='link' size='sm'>
          <Link to='/products'>Products</Link>
        </Button>
      </div>

      {/* PRODUCT */}
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* IMAGE: FIRST COL */}
        <img
          src={image}
          alt={title}
          className='w-96 h-96 object-cover rounded-lg lg:w-full'
        />

        {/* PRODUCT INFO: SECOND COL */}
        <div>
          <h1 className='capitalize font-bold text-3xl'>{title}</h1>
          <h4 className='text-xl mt-2'>{company}</h4>
          <p className='mt-3 text-md bg-muted inline-block p-2 rounded-md'>
            {dollars}
          </p>
          <p className='mt-6 leading-8'>{description}</p>
          {/* COLORS */}
          <SelectProductColor
            colors={colors}
            productColor={productColor}
            setProductColor={setProductColor}
          />

          {/* AMOUNT */}
          <SelectProductAmount
            mode={Mode.SingleProduct}
            amount={amount}
            setAmount={setAmount}
          />

          {/* CART BUTTON */}
          <Button className='mt-10' size='lg' onClick={addToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </section>
  )
}
export default SingleProduct
