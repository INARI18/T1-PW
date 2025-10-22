import './assets/styles/Landing.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import {useState} from 'react'
import ProductPage from './components/pages/ProductPage.jsx'
import LandingPage from './components/pages/LandingPage.jsx'
import Header from './components/ui/Header.jsx'
import Footer from './components/ui/Footer.jsx'
import CartPage from './components/pages/CartPage.jsx'
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

  return (
    <div>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<LandingPage cart={cart} products={productsData.products} addToCart={addToCart} clearCart={clearCart}/>} />
            <Route path="/products" element={<ProductPage products={productsData.products} addToCart={addToCart}/>} />
            <Route path="/cart" element={<CartPage cart={cart} clearCart={clearCart}/>} />
          </Routes>
      </BrowserRouter> 
      <Footer />
    </div>
  )
}

