import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer'
import NavBar from '../Shared/NavBar'

function Main() {
  return (
    <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
export default Main

 