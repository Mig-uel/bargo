import { Form, Link, useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FormInput } from '@/components/inputs'
import { SubmitButton } from '@/components/register'
import { Button } from '@/components/ui/button'
import { useAppDispatch } from '@/store/hooks'
import { type AxiosResponse } from 'axios'
import { customFetch } from '@/utils'
import { login } from '@/store/user/userSlice'
import { toast } from '@/hooks/use-toast'

const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const loginAsGuestUser = async (): Promise<void> => {
    try {
      const res: AxiosResponse<{
        jwt: string
        user: { username: string }
      }> = await customFetch.post('/auth/local/', {
        identifier: 'test@test.com',
        password: 'secret',
      })

      const username = res.data?.user.username
      const jwt = res.data?.jwt

      dispatch(login({ jwt, username }))

      navigate('/')
    } catch (error) {
      console.log(error)

      toast({ description: 'Login failed' })
    }
  }

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
