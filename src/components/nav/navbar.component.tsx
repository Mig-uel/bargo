import { CartButton, LinksDropdown, Logo, NavLinks, ThemeToggle } from '.'

const Navbar = () => {
  return (
    <nav className='bg-muted py-4'>
      <div className='align-element flex justify-between items-center'>
        <Logo />
        <LinksDropdown />
        <NavLinks />

        <div className='flex justify-center items-center gap-x-4'>
          <ThemeToggle />
          <CartButton />
        </div>
      </div>
    </nav>
  )
}
export default Navbar
