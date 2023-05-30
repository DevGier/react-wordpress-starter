import { Outlet } from 'react-router-dom'
import { Header, Footer, Main } from '@/layouts'

export default function App () {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer/>
    </>
  )
}