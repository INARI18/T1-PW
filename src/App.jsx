import './assets/styles/Landing.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import {useState} from 'react'
import ProductPage from './pages/ProductPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import CartPage from './pages/CartPage.jsx'
import Header from './components/ui/Header.jsx'
import Footer from './components/ui/Footer.jsx'
import GeneralCart from './components/ui/GeneralCart.jsx'
import DataBase from './assets/DataBase.json'



export default function App() {

  const [cart, setCart] = useState({storage: [], totalPrice: 0, size: 0})
 
  const addToCart = (product) => {
    setCart(prevCart => {
      product.id = prevCart.size
      const newStorage = [...prevCart.storage, product]
      const newTotalPrice = prevCart.totalPrice + product.price
      const newSize = prevCart.size + 1
      
      return {
        storage: newStorage,
        totalPrice: newTotalPrice,
        size: newSize
      }
    })
  }

  const clearCart = () => {
    setCart(prevCart => {
      const newStorage = []
      const newTotalPrice = 0
      const newSize = 0
      
      return {
        storage: newStorage,
        totalPrice: newTotalPrice,
        size: newSize
      }
    })
  }

  const excludeItem = (item) => {
    setCart(prevCart => {
      const newTotalPrice = prevCart.totalPrice - item.price
      const newSize = prevCart.size - 1
      const newStorage = prevCart.storage.filter((cartItem) => cartItem.id !== item.id)
      return {
            storage: newStorage,
            totalPrice: newTotalPrice,
            size: newSize
      }
    })
  }

  return (
    <div>
      <BrowserRouter>
        <Header />
        <GeneralCart cart={cart}/>
          <Routes>
            <Route path="/" element={<LandingPage 
              cart={cart} 
              products={DataBase.products} 
              addToCart={addToCart} 
              clearCart={clearCart} 
              excludeItem={excludeItem}/>} />
            <Route path="/products" element={<ProductPage 
              products={DataBase.products} 
              addToCart={addToCart}/>} />
            <Route path="/cart" element={<CartPage 
              cart={cart} 
              clearCart={clearCart} 
              excludeItem={excludeItem}/>} />
          </Routes>
      </BrowserRouter> 
      <Footer />
    </div>
  )
}

