import React from 'react'

function FavoriteItems({favoriteItem, handleRemoveBtn}) {
  return (
    <div className='flex justify-between p-4 text-text font-sora text-sm'>
        <div className='flex'>
            <img className='h-20 w-20 object-cover mr-3' src={favoriteItem.url} alt="" />
            <div>
                <p className='mb-3'>{favoriteItem.title}</p>
                <div className='flex'>
                    <p className='mr-8'>${favoriteItem.currentBidPrice}</p>
                    <p> <span>Bid:</span> {favoriteItem.bidsCount}</p>
                </div>
            </div>
        </div>
        <p>
            <button onClick={()=> handleRemoveBtn(favoriteItem)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </p>
    </div>
  )
}

export default FavoriteItems