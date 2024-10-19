import { AlignLeft } from 'lucide-react'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { links } from '@/utils'
import { NavLink } from 'react-router-dom'

const LinksDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='lg:hidden'>
        <Button variant='outline' size='icon'>
          <AlignLeft />
          <span className='sr-only'>Toggle Links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='lg:hidden w-52'
        align='start'
        sideOffset={25}
      >
        {links.map((link) => (
          <DropdownMenuItem key={link.label}>
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                `capitalize w-full ${isActive ? 'text-primary' : ''}`
              }
            >
              {link.label}
            </NavLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default LinksDropdown
