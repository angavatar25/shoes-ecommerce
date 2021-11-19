import { useState } from 'react/cjs/react.development';
import './App.css';
import CheckoutWindow from './components/checkoutWindow';
import mainLogo from './assets/images/logo.svg'
import cartLogo from './assets/images/icon-cart.svg'
import profile from './assets/images/image-avatar.png'
import mainProduct from './assets/images/image-product-1.jpg'
import secondMainProduct from './assets/images/image-product-2.jpg'
import thirdMainProduct from './assets/images/image-product-3.jpg'
import fourthMainProduct from './assets/images/image-product-4.jpg'
import cartIcon from './assets/images/icon-cart.svg'
import firstImage from './assets/images/image-product-1-thumbnail.jpg'
import secondImage from './assets/images/image-product-2-thumbnail.jpg'
import thirdImage from './assets/images/image-product-3-thumbnail.jpg'
import fourthImage from './assets/images/image-product-4-thumbnail.jpg'

function App() {
  const [count, setcount] = useState(0)
  const [currentImage, setcurrentImage] = useState('')
  const [activeImage, setactiveImage] = useState(mainProduct)
  const [checkoutBar, setcheckoutBar] = useState(false)
  const [onImageSlide, setonImageSlide] = useState('')
  const [countCheckout, setcountCheckout] = useState([])
  var price = '125'
  const nav_menu = [
    { id: 1, name: 'Collections' },
    { id: 2, name: 'Men' },
    { id: 3, name: 'Women' },
    { id: 4, name: 'About' },
    { id: 5, name: 'Contact' }
  ]
  const imageCollection = [
    { id: 1, image: firstImage, main: mainProduct },
    { id: 2, image: secondImage, main: secondMainProduct },
    { id: 3, image: thirdImage, main: thirdMainProduct },
    { id: 4, image: fourthImage, main: fourthMainProduct }
  ]
  const chooseActiveImage = async (payload) => {
    const mainImage = document.getElementById('mainImage')
    await setcurrentImage(payload.id)
    await setactiveImage(payload.main)
  }
  const showCheckout = () => {
    setcheckoutBar(!checkoutBar)
  }
  const decreaseCount = () => {
    setcount(count - 1)
    if (count === 0) {
      setcount(0)
    }
  }
  const pushToCheckout = (amount) => {
    const total = amount * price
    const id = Math.floor((Math.random() * 100) + 1);
    var object = { id: id, amount: amount, total: total }
    setcountCheckout(checkout => [...checkout, object])
  }
  return (
    <div className="App md:max-w-max-w-screen-lg lg:max-w-screen-lg mx-auto relative">
      <CheckoutWindow
        active={checkoutBar}
        amount={countCheckout}
      />
      <header className="flex justify-between py-8 border-b border-gray-500">
        <div className="flex my-auto">
          <div className="logo">
            <img src={mainLogo} alt="main-logo" />
          </div>
          <ul className="menu flex gap-6 ml-10">
            {nav_menu.map((index) => {
              return (
                <li key={index.id}>
                  <a href="">{index.name}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="flex">
          <button>
            <img src={cartLogo} onClick={showCheckout} alt="" />
          </button>
          <div>
            <img src={profile} alt="" className="w-10 h-10 ml-6" />
          </div>
        </div>
      </header>
      <div className="content px-6 py-10 grid grid-cols-2 gap-12 min-h-screen">
        <div>
          <img id="mainImage" src={activeImage} alt="" className={`w-full transition transform duration-300 rounded-lg ${onImageSlide === 'next' ? 'opacity-0 translate-x-5' : 'opacity-100'}`} />
          <div className="grid grid-cols-4 gap-6 mt-6">
            {imageCollection.map((index) => {
              return (
                <div className={`rounded-lg overflow-hidden ${currentImage === index.id ? 'border-2 border-primary' : ''}`} key={index.id}>
                  <img src={index.image} onClick={() => chooseActiveImage(index)} alt="" key={index.id} className={`transition transform duration-700 ${currentImage === index.id ? 'opacity-25 scale-125' : ''}`} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="my-auto ml-6">
          <div className="text-left">
            <p className="uppercase mb-4 text-primary font-semibold">Sneaker Company</p>
            <h2 className=" text-5xl font-semibold">Fall Limited Edition Sneakers</h2>
            <p className=" mt-7 text-base leading-relaxed text-gray-500">The low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
          </div>
          <div className="text-left my-7">
            <p className="font-semibold text-3xl my-auto">${price}.00 <span className="text-xl my-auto text-primary ml-4 bg-paleOrange p-2 rounded-md">50%</span> </p>
            <p className=" line-through my-4 font-semibold text-gray-400">$250.00</p>
          </div>
          <div className="flex gap-6">
            <div className="flex bg-gray-100 rounded-lg w-40 justify-evenly py-4">
              <button onClick={() => decreaseCount()} className=" my-auto text-primary text-xl">-</button>
              <p className="my-auto">{count}</p>
              <button onClick={() => setcount(count + 1)} className="my-auto text-primary text-xl">+</button>
            </div>
            <div className="my-auto py-4 w-full rounded-lg transition duration-200 bg-primary hover:opacity-25" onClick={() => pushToCheckout(count)}>
              <button className="flex m-auto text-white justify-center">
                <img src={cartIcon} alt="" className="text-white mr-3" />
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
