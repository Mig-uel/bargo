import { Link } from 'react-router-dom'
import { LucideStore } from 'lucide-react'

const Logo = () => {
  return (
    <Link
      to='/'
      className='hidden lg:flex justify-center items-center bg-primary p-2 rounded-lg text-white'
    >
      <LucideStore className='w-8 h-8' />
    </Link>
  )
}
export default Logo
