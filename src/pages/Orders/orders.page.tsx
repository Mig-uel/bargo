import { useAppSelector } from '@/store/hooks'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Orders = () => {
  const navigate = useNavigate()
  const user = useAppSelector((state) => state.user.user)

  useEffect(() => {
    if (!user) return navigate('/login', { replace: true })
  }, [navigate, user])

  return <div>Orders</div>
}
export default Orders
