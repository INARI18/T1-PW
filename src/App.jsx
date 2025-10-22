import './assets/styles/App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ProductPage from './products/index.jsx'
import LandingPage from './landing/index.jsx'
import Header from './components/ui/Header.jsx'
import Footer from './components/ui/Footer.jsx'
import CartPage from './cart/index.jsx'


export default function App() {

  return (
    <div>
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/products" element={<ProductPage />} />
          </Routes>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
          <Routes>
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter> 
      <Footer />
    </div>
  
  )
}

