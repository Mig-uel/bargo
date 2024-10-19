import { Header, Loading, NavBar } from '@/components'
import { Outlet, useNavigation } from 'react-router-dom'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <>
      <Header />
      <NavBar />

      <div className='align-element py-20'>
        {isLoading ? <Loading /> : <Outlet />}
      </div>
    </>
  )
}
export default HomeLayout
