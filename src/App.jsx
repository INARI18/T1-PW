import './assets/styles/App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ProductPage from './products/ProductPage.jsx'
import LandingPage from './landing/LandingPage.jsx'
import Header from './components/ui/Header.jsx'
import Footer from './components/ui/Footer.jsx'
import CartPage from './cart/CartPage.jsx'
import productsData from './assets/Produtos.json'



export default function App() {

  let cart = []
  const products = [
    { id: 1, name: 'Prod 1', price: 109.5 }, 
    { id: 2, name: 'Prod 2', price: 59.05 }, 
    { id: 3, name: 'Prod 3', price: 29.90 },
    { id: 4, name: 'Prod 4', price: 35.50 },
    { id: 5, name: 'Prod 5', price: 90.10 },
    { id: 6, name: 'Prod 6', price: 12.00 }
  ]

  return (
    <div>
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage cart={cart} products={products}/>} />
            <Route path="/products" element={<ProductPage products={products}/>} />
            <Route path="/cart" element={<CartPage cart={cart}/>} />
          </Routes>
        </BrowserRouter> 
      <Footer />
    </div>
  )
}

