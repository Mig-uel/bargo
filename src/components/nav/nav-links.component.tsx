import { useAppSelector } from '@/store/hooks'
import { links } from '@/utils'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  const user = useAppSelector((state) => state.user.user)

  return (
    <div className='hidden lg:flex justify-center items-center gap-x-4'>
      {links.map((link) => {
        if (link.label === 'orders' && !user) return

        return (
          <NavLink
            to={link.href}
            key={link.label}
            className={({ isActive }) =>
              `capitalize font-light tracking-wide ${
                isActive ? 'text-primary' : ''
              }`
            }
          >
            {link.label}
          </NavLink>
        )
      })}
    </div>
  )
}
export default NavLinks
