import { login } from '@/store/user/userSlice'
import { customFetch } from '@/utils'
import { type ActionFunction, redirect } from 'react-router-dom'
import { type ReduxStore } from '@/store/store'
import { toast } from '@/hooks/use-toast'

const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData()

    const loginData = Object.fromEntries(formData)

    try {
      const res = await customFetch.post<{
        jwt: string
        user: { username: string }
      }>('/auth/local', loginData)

      const username = res.data.user.username
      const jwt = res.data.jwt

      store.dispatch(login({ jwt, username }))

      return redirect('/')
    } catch (error) {
      console.log(error)

      toast({ description: 'Login failed' })

      return null
    }
  }

export default action
