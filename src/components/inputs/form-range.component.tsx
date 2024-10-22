import { useState } from 'react'
import { formatPrice } from '@/utils'
import { Label } from '../ui/label'
import { Slider } from '../ui/slider'

type FormRangeProps = {
  label?: string
  name: string
  defaultValue?: string
}

const FormRange = ({ label, name, defaultValue }: FormRangeProps) => {
  const step = 1000
  const maxPrice = 100000
  const defaultPrice = defaultValue ? Number(defaultValue) : maxPrice

  const [selectedPrice, setSelectedPrice] = useState(defaultPrice)

  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize flex justify-between'>
        {label || name}
        <span>{formatPrice(selectedPrice)}</span>
      </Label>
      <Slider
        id={name}
        name={name}
        step={step}
        max={maxPrice}
        value={[selectedPrice]}
        onValueChange={(value) => setSelectedPrice(value[0])}
        className='mt-4'
      ></Slider>
    </div>
  )
}
export default FormRange
