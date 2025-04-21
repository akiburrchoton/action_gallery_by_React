import React from 'react'
import '../../index.css'


const Navbar = () => {
  return (
    <div className='flex justify-center'>
      <div className="navbar bg-base-100 w-11/12">
      <div className="navbar-start">
        <a className="font-poppins text-2xl font-semibold"> 
          <span className="text-blue">Action</span> 
          <span className="text-yellow">Gallery</span></a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-poppins text-[16px]">
          <li className='pr-10'><a>Home</a></li>
          <li className='pr-10'><a>Auction</a></li>
          <li className='pr-10'><a>Categories</a></li>
          <li className='pr-10'><a>How to work</a></li>
        </ul>
      </div>

      <div className="navbar-end">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-circle mr-6">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>

          <span className=" indicator-item bg-blue text-white font-sora rounded-2xl text-[8px] px-2 py-1">8</span>
        </div>
      </div>
  
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar