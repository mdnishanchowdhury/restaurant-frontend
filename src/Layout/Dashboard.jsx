import { FaCalendar, FaHome } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink, Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
import { FaBookmark } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { useState } from "react";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex ">

      {/* Hamburger button - visible only on mobile */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden text-3xl text-[#D1A054]"
        aria-label="Open sidebar"
      >
        <GiHamburgerMenu />
      </button>

      {/* Sidebar */}
      <div
        className={` 
          fixed top-0 left-0  bg-[#D1A054] w-[280px] min-h-screen flex justify-center
          transform transition-transform duration-300
          md:relative md:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          z-40
        `}
      >
        {/* Close button for mobile */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-4 right-4 text-white text-3xl md:hidden"
          aria-label="Close sidebar"
        >
          ×
        </button>

        <ul className="menu min-h-full w-[233px] p-4 gap-4 text-white">
          {/* User Home */}
          <li className="uppercase">
            <NavLink to="/dashboard/userHome" className={({ isActive }) => isActive ? "text-yellow-300" : ""}>
              <FaHome className="w-8 h-8" />
              User Home
            </NavLink>
          </li>
          {/* Reservation */}
          <li className="uppercase">
            <NavLink to="/dashboard/userHome" className={({ isActive }) => isActive ? "text-yellow-300" : ""}>
              <FaCalendar className="w-8 h-8" />
              Reservation
            </NavLink>
          </li>
          {/* Payment History */}
          <li className="uppercase">
            <NavLink to="/dashboard/userHome" className={({ isActive }) => isActive ? "text-yellow-300" : ""}>
              <MdOutlinePayment className="w-8 h-8" />
              Payment History
            </NavLink>
          </li>
          {/* My Cart */}
          <li className="uppercase">
            <NavLink to="/dashboard/cart" className={({ isActive }) => isActive ? "text-yellow-300" : ""}>
              <IoCartOutline className="w-8 h-8" />
              My Cart
            </NavLink>
          </li>
          {/* Add Review */}
          <li className="uppercase">
            <NavLink to="/dashboard/userHome" className={({ isActive }) => isActive ? "text-yellow-300" : ""}>
              <IoIosAddCircle className="w-8 h-8" />
              Add Review
            </NavLink>
          </li>
          {/* My Booking */}
          <li className="uppercase">
            <NavLink to="/dashboard/userHome" className={({ isActive }) => isActive ? "text-yellow-300" : ""}>
              <FaBookmark className="w-8 h-8" />
              My Booking
            </NavLink>
          </li>

          {/* shared navlink */}
          <div className="divider border-t border-yellow-300 my-4"></div>

          {/* Home */}
          <li className="uppercase">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-300" : ""}>
              <FaHome className="w-8 h-8" />
              Home
            </NavLink>
          </li>

          {/* Menu */}
          <li className="uppercase">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-300" : ""}>
              <GiHamburgerMenu className="w-8 h-8" />
              Menu
            </NavLink>
          </li>

          {/* Shop */}
          <li className="uppercase">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-300" : ""}>
              <IoCartOutline className="w-8 h-8" />
              Shop
            </NavLink>
          </li>

          {/* Contact */}
          <li className="uppercase">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-300" : ""}>
              <IoMdContact className="w-8 h-8" />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
