type SelectProductColorProps = {
  colors: string[]
  productColor: string
  setProductColor: React.Dispatch<React.SetStateAction<string>>
}

const SelectProductColor = ({
  colors,
  productColor,
  setProductColor,
}: SelectProductColorProps) => {
  return (
    <div className='mt-6'>
      <h4 className='text-md font-medium tracking-wider capitalize'>Colors</h4>

      <div className='mt-2'>
        {colors.map((color) => (
          <button
            key={color}
            type='button'
            className={`rounded-full w-6 h-6 mr-2 border-2 ${
              color === productColor ? 'border-primary' : ''
            }`}
            onClick={() => setProductColor(color)}
            style={{ backgroundColor: color }}
          ></button>
        ))}
      </div>
    </div>
  )
}
export default SelectProductColor
