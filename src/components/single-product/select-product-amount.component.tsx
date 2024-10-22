import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

export enum Mode {
  SingleProduct = 'singleProduct',
  CartItem = 'cartItem',
}

type SelectProductAmountProps = {
  mode: Mode
  amount: number
  setAmount: React.Dispatch<React.SetStateAction<number>>
}

type SelectCartItemAmountProps = {
  mode: Mode
  amount: number
  setAmount: (value: number) => void
}

const SelectProductAmount = ({
  mode,
  amount,
  setAmount,
}: SelectProductAmountProps | SelectCartItemAmountProps) => {
  const cartItem = mode === Mode.CartItem

  return (
    <>
      <h4 className='font-md mb-2'>Amount: </h4>
      <Select
        defaultValue={amount.toString()}
        onValueChange={(value) => setAmount(Number(value))}
      >
        <SelectTrigger className={cartItem ? 'w-[75px]' : 'w-[150px]'}>
          <SelectValue placeholder={amount} />
        </SelectTrigger>

        <SelectContent>
          {Array.from({ length: cartItem ? amount + 1 : 10 }, (_, index) => (
            <SelectItem key={index} value={(index + 1).toString()}>
              {index + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}
export default SelectProductAmount
