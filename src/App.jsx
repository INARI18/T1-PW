import './assets/styles/Landing.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import {useState} from 'react'
import ProductPage from './pages/ProductPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import CartPage from './pages/CartPage.jsx'
import ItemPage from './pages/ItemPage.jsx'
import Header from './components/ui/Header.jsx'
import Footer from './components/ui/Footer.jsx'
import GeneralCart from './components/ui/GeneralCart.jsx'
import DataBase from './assets/DataBase.json'



export default function App() {

  const [cart, setCart] = useState({storage: [], totalPrice: 0, size: 0, idCounter: 1})

  const addToCart = (product) => {
    setCart(prevCart => {
      const newItem = { ...product, id: prevCart.idCounter}
      console.log('Adicionando item:', newItem)

      const newStorage = [...prevCart.storage, newItem]
      const newTotalPrice = prevCart.totalPrice + newItem.price
      const newSize = prevCart.size + 1
      const newIdCounter = prevCart.idCounter + 1
      return {
        storage: newStorage,
        totalPrice: newTotalPrice,
        size: newSize,
        idCounter: newIdCounter
      }
    })
  }

  const clearCart = () => {
      cart.storage.map((item) => {excludeItem(item)})
      return
  }

  const excludeItem = (item) => {
    console.log('Excluindo item:', item)
    setCart(prevCart => {
      const newTotalPrice = prevCart.totalPrice - item.price
      const newSize = prevCart.size - 1
      const newStorage = prevCart.storage.filter((cartItem) => cartItem.id !== item.id)
      return {
            storage: newStorage,
            totalPrice: newTotalPrice,
            size: newSize,
            idCounter: prevCart.idCounter
      }
    })
  }

  return (
    <div>
      <BrowserRouter>
        <Header />
        <GeneralCart 
          size={cart.size}/>
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
            <Route path="/products/item" element={<ItemPage/>}/>
          </Routes>
      </BrowserRouter> 
      <Footer />
    </div>
  )
}

