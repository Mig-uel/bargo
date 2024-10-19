import { Header } from '@/components'
import { Navbar } from '@/components/nav'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />

      <div className='align-element py-20'>
        <Outlet />
      </div>
    </>
  )
}
export default HomeLayout
