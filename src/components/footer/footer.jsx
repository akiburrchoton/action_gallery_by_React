import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col items-center justify-center py-20'>    
        <a className="font-poppins text-2xl font-semibold mb-2"> 
            <span className="text-blue">Action</span> 
            <span className="text-yellow">Gallery</span>
        </a>
      
        <div className='flex font-sora font-medium mb-2'>
            <p className='mr-4'>Bid.</p>
            <p className='mr-4'>Win.</p>
            <p>Own.</p>
        </div>

        <div className='mb-1'>
            <ul className="menu menu-horizontal font-poppins text-[16px]">
            <li className='pr-6'><a>Home</a></li>
            <li className='pr-6'><a>Auction</a></li>
            <li className='pr-6'><a>Categories</a></li>
            <li className='pr-6'><a>How to work</a></li>
            </ul>
        </div>

        <div className='flex font-sora'>
            <p>© 2025 AuctionHub. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer