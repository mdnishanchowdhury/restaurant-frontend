import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../Providers/AuthProvider"
import Swal from "sweetalert2"
import { IoCartOutline } from "react-icons/io5";
import useCart from "../Hooks/useCart";
import { GiHamburgerMenu } from "react-icons/gi";
function NavBar() {
    const [cart, refetch] = useCart();
    const { userLogOut, user } = useContext(AuthContext)
    const links = <>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/contact'>CONTACT US</NavLink></li>
        <li><NavLink>DASHBOARD</NavLink></li>
        <li><NavLink to='/menu'>OUR MENU</NavLink></li>
        <li><NavLink to='/orders/salad'>OUR SHOP</NavLink></li>
    </>

    //logout
    const handleLoginOut = () => {
        userLogOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "successfully LogOut ",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <>
            <div className="navbar fixed z-10  bg-[#15151580] max-w-7xl text-white shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <GiHamburgerMenu className="w-8 h-8 " />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-[16px] dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-[#D1A054] text-xl font-medium ">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl md:text-3xl font-black">BISTRO BOSS</a>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3 ">
                    <Link to='/dashboard/cart'>
                        <button className="btn relative  rounded-full">
                            <IoCartOutline className="w-8 h-8" />
                            <div className="badge badge-sm badge-secondary absolute top-0 left-0 -translate-y-1/2">
                                +{cart.length}
                            </div>
                        </button>

                    </Link>

                    {
                        user && user.email ?
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