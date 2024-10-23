import { redirect, type ActionFunction } from 'react-router-dom'
import { customFetch } from '@/utils'
import { toast } from '@/hooks/use-toast'
import { AxiosError } from 'axios'

const action: ActionFunction = async ({
  request,
}): Promise<Response | null> => {
  const formData = await request.formData()
  const userData = Object.fromEntries(formData)

  try {
    await customFetch.post('/auth/local/register', userData)

    toast({ description: 'Successfully registered!' })

    return redirect('/login')
  } catch (error) {
    if (error instanceof AxiosError) {
      toast({
        description: error.response?.data.error.message,
      })
    } else {
      toast({ description: 'Registration Failed' })
    }

    return null
  }
}

export default action
