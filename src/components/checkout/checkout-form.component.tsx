import { Form } from 'react-router-dom'
import { FormInput } from '../inputs'
import { SubmitButton } from '../register'

const CheckoutForm = () => {
  return (
    <Form method='post' className='flex flex-col gap-y-4'>
      <h1 className='font-medium text-lg mb-4'>Shipping Info</h1>

      <FormInput label='name' type='text' name='name' />
      <FormInput label='address' type='text' name='address' />

      <SubmitButton text='place order' className='capitalize mt-4' />
    </Form>
  )
}
export default CheckoutForm
