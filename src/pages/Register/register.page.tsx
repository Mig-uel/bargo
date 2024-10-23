import { registerAction } from '@/actions'
import { FormInput } from '@/components/inputs'
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
          <Form>
            <FormInput
              name='username'
              label='username'
              type='text'
              defaultValue='test'
            />

            <FormInput
              name='email'
              type='email'
              defaultValue='test@test.com'
              label='email'
            />

            <FormInput
              name='password'
              type='password'
              defaultValue='secret'
              label='password'
            />

            <Button type='submit' variant='default' className='mt-4 w-full'>
              Register
            </Button>

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
