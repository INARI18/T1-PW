import './assets/styles/Landing.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import {useState} from 'react'
import ProductPage from './pages/ProductPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import CartPage from './pages/CartPage.jsx'
import Header from './components/ui/Header.jsx'
import Footer from './components/ui/Footer.jsx'
import productsData from './assets/Produtos.json'



export default function App() {

  const [cart, setCart] = useState({storage: [], totalPrice: 0, size: 0})
 
  const addToCart = (product) => {
    setCart(prevCart => {
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
      const newStorage = prevCart.filter((product) => product.id !== item.id)
      const newTotalPrice = cart.totalPrice - item.price
      const newSize = cart.size - 1
      
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
          <Routes>
            <Route path="/" element={<LandingPage cart={cart} products={productsData.products} addToCart={addToCart} clearCart={clearCart} excludeItem={excludeItem}/>} />
            <Route path="/products" element={<ProductPage products={productsData.products} addToCart={addToCart}/>} />
            <Route path="/cart" element={<CartPage cart={cart} clearCart={clearCart} excludeItem={excludeItem}/>} />
          </Routes>
      </BrowserRouter> 
      <Footer />
    </div>
  )
}

