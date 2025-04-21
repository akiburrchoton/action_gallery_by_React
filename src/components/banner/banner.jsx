import React from 'react'
import heroBg from '../../assets/Banner-min.jpg';


function Banner() {
  return (
    <div className="w-full h-[600px] bg-center bg-cover flex items-center justify-center text-white font-sora"
    style={{ backgroundImage: `url(${heroBg})` }}>
        <div className='w-11/12 '>
            <p className='text-3xl font-semibold w-1/3 mb-5'>Bid on Unique Items from Around the World</p>
            <p className='w-1/3 font-light mb-10'>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
            <a href="#" className='px-5 py-3 bg-white text-text rounded-4xl font-medium'>Explore Auction</a>
        </div>
    </div>
  )
}

export default Banner