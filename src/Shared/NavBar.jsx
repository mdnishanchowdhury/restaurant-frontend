import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../Providers/AuthProvider"

function NavBar() {
    const { logo, userLogOut, user } = useContext(AuthContext)
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/contact'>CONTACT US</NavLink></li>
        <li><NavLink>DASHBOARD</NavLink></li>
        <li><NavLink to='/menu'>OUR MENU</NavLink></li>
        <li><NavLink to='/orders/salad'>OUR SHOP</NavLink></li>
    </>

    //logout
    const handleLoginOut = () => {
        userLogOut()
            .then(() => {
                alert('Successfully LogOut')
            })
    }
    return (
        <>
            <div className="navbar fixed z-10 bg-orange-30 bg-[#15151580] max-w-7xl text-white shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-black">{logo}</a>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user&& user.email ?
                            <>
                                <Link to='/signUp' onClick={handleLoginOut} className="btn">SignOut</Link>
                            </>
                            :
                            <>
                                <Link to='/login' className="btn">Login</Link>
                                <Link to='/signUp' className="btn">SignUp</Link>
                            </>

                    }


                    {/* <a className="btn">Button</a> */}
                </div>
            </div>
        </>
    )
}

export default NavBar