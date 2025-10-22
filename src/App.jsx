import './assets/styles/Landing.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ProductPage from './components/pages/ProductPage.jsx'
import LandingPage from './components/pages/LandingPage.jsx'
import Header from './components/ui/Header.jsx'
import Footer from './components/ui/Footer.jsx'
import CartPage from './components/pages/CartPage.jsx'
import productsData from './assets/Produtos.json'



export default function App() {

  let cart = []

  return (
    <div>
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage cart={cart} products={productsData.products}/>} />
            <Route path="/products" element={<ProductPage products={productsData.products}/>} />
            <Route path="/cart" element={<CartPage cart={cart}/>} />
          </Routes>
        </BrowserRouter> 
      <Footer />
    </div>
  )
}

