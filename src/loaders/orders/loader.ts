import { toast } from '@/hooks/use-toast'
import { ReduxStore } from '@/store/store'
import { customFetch, OrdersResponse } from '@/utils'
import { LoaderFunction, redirect } from 'react-router-dom'

const loader =
  (store: ReduxStore): LoaderFunction =>
  async ({ request }): Promise<OrdersResponse | Response | null> => {
    try {
      if (!store.getState().user.user) {
        return redirect('/login')
      }
      const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
      ])

      const res = await customFetch.get<OrdersResponse>('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${store.getState().user.user?.jwt}`,
        },
      })

      return {
        ...res.data,
      }
    } catch (error) {
      console.log(error)

      toast({ description: 'Failed to fetch orders' })
      return null
    }
  }

export default loader
