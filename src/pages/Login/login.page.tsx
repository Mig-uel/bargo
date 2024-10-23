import { Form, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FormInput } from '@/components/inputs'
import { SubmitButton } from '@/components/register'
import { Button } from '@/components/ui/button'

const Login = () => {
  const loginAsGuestUser = () => {}

  return (
    <section className='h-screen grid place-items-center'>
      <Card className='bg-muted w-96'>
        <CardHeader>
          <CardTitle className='text-center capitalize'>login</CardTitle>
        </CardHeader>

        <CardContent>
          <Form method='post'>
            <FormInput type='email' label='email' name='identifier' />

            <FormInput type='password' label='password' name='password' />

            <SubmitButton text='Login' className='w-full mt-4' />

            {/* GUEST BUTTON */}
            <Button
              type='button'
              variant='outline'
              className='w-full mt-4'
              onClick={loginAsGuestUser}
            >
              Login as Guest
            </Button>

            <p className='text-center mt-4'>
              Not a member?{' '}
              <Button asChild variant='link' type='button'>
                <Link to='/register'>Register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  )
}
export default Login
