import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './App.css'
import './index.css'
import Navbar from './components/navbar/navbar'
import Banner from './components/banner/banner'
import Auctions from './components/auctions/auctions'
import Footer from './components/footer/footer';

function App() {
  const [bidCompleted, setBidCompleted] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  
  const successToast = () => toast('Item has been added to your favorite list!'
  );
  const warningToast = () => toast.error('Item has been removed from favorite list!'
  );

  const bidNow = (auction) => {
    successToast()
    const newPrice = totalPrice + parseInt(auction.currentBidPrice)
    setTotalPrice(newPrice)
    setBidCompleted([...bidCompleted, auction])
  }


  const handleRemoveBtn = (favoriteItem) => {
    warningToast()

    const reducedPrice = totalPrice - parseInt(favoriteItem.currentBidPrice)
    setTotalPrice(reducedPrice)

    const remainingItems = bidCompleted.filter((bid)=> bid.id !== favoriteItem.id ) 
    setBidCompleted(remainingItems)
  }

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Auctions 
        bidNow={bidNow} 
        bidCompleted={bidCompleted} 
        handleRemoveBtn={handleRemoveBtn} 
        totalPrice={totalPrice} 
        ></Auctions>
        <Footer></Footer>
        <ToastContainer />
      </div>
      
    </>
  )
}

export default App
