import React, { useState, useEffect } from 'react'
import Auction from './auction'
import FavoriteItems from './favoriteitems'

function Auctions({bidNow, bidCompleted, handleRemoveBtn, totalPrice, isHeartClicked}) {
  const [auctions, setAuctions] = useState([])

  useEffect(() => {
    fetch("data.json")
    .then(response => response.json())
    .then(data => setAuctions(data))
  }, [])
  


  return (
    <div className='flex justify-center bg-[#EBF0F5] '>
      <div className="w-11/12 py-25">
        <p className='font-sora text-text text-xl mb-2'>Active Auctions</p>
        <p className='font-sora text-sm'>Discover and bid on extraordinary items</p>

        <div className='flex mt-5'> 
          <div className='w-[70%]'>
          <div className="font-sora overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mr-6">
            <table className="table">
              {/* head */}
              <thead >
                <tr className='text-center'>
                  <th className='text-text text-left font-normal'>Items</th>
                  <th className='text-text font-normal'>Current Bid</th>
                  <th className='text-text font-normal'>Time Left</th>
                  <th className='text-text font-normal'>Bid Now</th>
                </tr>
              </thead>
            
            {
              auctions.map( (auction) => <Auction key={auction.id} auction={auction} 
              bidNow={bidNow}
              bidCompleted={bidCompleted}  ></Auction> )
            }

            </table>
          </div>
          </div>
          <div className='w-[30%] h-full bg-white rounded-xl flex flex-col justify-center'>
            <div className='flex items-center justify-center py-5 border-b-1 border-[#DCE5F3]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
              <p className='font-sora text-text font-medium text-xl pl-2'>Favorite Items</p>
            </div>
                      
            {bidCompleted.length !== 0 ? 
              bidCompleted.map( (favoriteItem) => <FavoriteItems key={favoriteItem.id} favoriteItem={favoriteItem} handleRemoveBtn={handleRemoveBtn}></FavoriteItems>)
            :
             <div className='flex flex-col items-center justify-center py-5 border-b-1 
             border-[#DCE5F3]'>
               <p className='font-sora font-medium text-md pb-1'>No favorites yet</p>
               <p className='font-sora text-center text-[12px] px-25'>Click the heart icon on any item to add it to your favorites</p>
             </div>
            }
              
            <div className="flex items-center justify-between py-5 px-6">
              <p className="font-sora font-medium text-md">Total bids Amount</p>
              <p className="font-sora font-medium text-md">${totalPrice}</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Auctions