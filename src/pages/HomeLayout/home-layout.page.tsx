import { Header, NavBar } from '@/components'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
      <Header />
      <NavBar />

      <div className='align-element py-20'>
        <Outlet />
      </div>
    </>
  )
}
export default HomeLayout
