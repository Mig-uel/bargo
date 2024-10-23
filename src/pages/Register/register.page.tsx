import { FormInput } from '@/components/inputs'
import { SubmitButton } from '@/components/register'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, Link } from 'react-router-dom'

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Card className='w-96 bg-muted'>
        <CardHeader>
          <CardTitle className='text-center capitalize'>register</CardTitle>
        </CardHeader>

        <CardContent>
          <Form method='POST'>
            <FormInput name='username' label='username' type='text' />

            <FormInput name='email' type='email' label='email' />

            <FormInput name='password' type='password' label='password' />

            <SubmitButton text='Register' className='w-full mt-4' />

            <p className='text-center mt-4'>
              Already a member?
              <Button type='button' asChild variant='link'>
                <Link to='/login'>Login</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  )
}
export default Register
