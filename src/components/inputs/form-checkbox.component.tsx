import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'

type FormCheckboxProps = {
  label?: string
  name: string
  defaultValue?: string
}

const FormCheckbox = ({ name, defaultValue, label }: FormCheckboxProps) => {
  const defaultChecked = defaultValue === 'on' ? true : false

  return (
    <div className='mb-2 flex justify-between self-end'>
      <Label className='capitalize' htmlFor={name}>
        {label || name}
      </Label>

      <Checkbox
        id={name}
        name={name}
        defaultChecked={defaultChecked}
      ></Checkbox>
    </div>
  )
}
export default FormCheckbox
