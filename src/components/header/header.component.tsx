import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Button } from '../ui/button'
import { useToast } from '@/hooks/use-toast'
import { clearCart } from '@/store/cart/cartSlice'
import { logout } from '@/store/user/userSlice'

const Header = () => {
  const user = useAppSelector((state) => state.user.user)
  const dispatch = useAppDispatch()
  const { toast } = useToast()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(clearCart())
    dispatch(logout())
    toast({ description: 'Logged out' })
    navigate('/')
  }

  return (
    <header>
      <div className=' align-element flex justify-center sm:justify-end py-2'>
        {/* USER */}

        {user ? (
          <div className='flex gap-x-2 sm:gap-x-8 items-center'>
            <p className='text-xs sm:text-sm capitalize'>
              Hello, {user.username}!
            </p>
            <Button variant='link' size='sm' onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className='flex gap-x-6 justify-center items-center -mr-4'>
            <Button asChild variant='link' size='sm'>
              <Link to='/login'>Login / Guest</Link>
            </Button>
            <Button asChild variant='link' size='sm'>
              <Link to='/register'>Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
export default Header
