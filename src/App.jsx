import './assets/styles/Landing.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ProductPage from './components/pages/ProductPage.jsx'
import LandingPage from './components/pages/LandingPage.jsx'
import Header from './components/ui/Header.jsx'
import Footer from './components/ui/Footer.jsx'
import CartPage from './components/pages/CartPage.jsx'
import productsData from './assets/Produtos.json'



export default function App() {

  const cart = {storage: [], totalPrice: 0, size: 0 }

  const setCart= (product) => {
      const newStorage = [...cart.storage, product]
      const newTotalPrice = cart.totalPrice + product.price
      const newSize = cart.size + 1
      return {
        storage: newStorage,
        totalPrice: newTotalPrice,
        size: newSize
      }
    }

  const addToCart = (product) => {
    setCart(product)
  }

  return (
    <div>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<LandingPage cart={cart} products={productsData.products} addToCart={addToCart}/>} />
            <Route path="/products" element={<ProductPage products={productsData.products} addToCart={addToCart}/>} />
            <Route path="/cart" element={<CartPage cart={cart}/>} />
          </Routes>
      </BrowserRouter> 
      <Footer />
    </div>
  )
}

