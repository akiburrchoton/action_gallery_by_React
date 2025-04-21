import React from 'react'

function Auction({auction, bidNow, bidCompleted}) {
    
  return (
    <>
        <tbody>
            <tr>
                <td>
                    <div className='flex items-center'>
                        <img className='h-15 w-15 object-cover mr-3' src={auction.url} alt="" />
                        <p className='text-text'>{auction.title}</p>
                    </div>
                </td>
                <td className='text-center'>${auction.currentBidPrice}</td>
                <td className='text-center'>{auction.timeLeft}</td>
                <td className='text-center'>
                <button 
                onClick={() => bidNow(auction)}
                disabled={bidCompleted.includes(auction)}
                className={`${
                    bidCompleted.includes(auction)
                      ? 'cursor-not-allowed'
                      : 'hover:text-red-800'
                  }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    fill={bidCompleted.includes(auction)  ? "red" : "none"} 
                    viewBox="0 0 24 24" stroke-width="1.5" 
                    stroke={bidCompleted.includes(auction)  ? "red" : "currentColor"} 
                    class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                    
                </button>

                </td>
            </tr>
        </tbody>
    </>
  )
}





export default Auction