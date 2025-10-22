import React, { useState } from 'react'
import '../assets/styles/App.css'
import { ProductList } from '../components/Product_List.jsx'
import { Cart } from '../components/Cart'

export default function LandingPage() {
  const [cart, setCart] = useState({ storage: [], totalPrice: 0, size: 0 })

  const products = [
    { id: 1, name: 'Prod 1', price: 109.5 }, 
    { id: 2, name: 'Prod 2', price: 59.05 }, 
    { id: 3, name: 'Prod 3', price: 29.90 },
    { id: 4, name: 'Prod 4', price: 35.50 },
    { id: 5, name: 'Prod 5', price: 90.10 },
    { id: 6, name: 'Prod 6', price: 12.00 }
  ]

  const addToCart = (product) => {
    setCart((prev) => {
      const newStorage = [...prev.storage, product]
      return {
        storage: newStorage,
        totalPrice: prev.totalPrice + product.price,
        size: prev.size + 1
      }
    })
  }

  return (
      <main>
        <section>
            <Cart cart={cart} />
        </section>
        <section>
          <div className="product-Section">
            <ProductList products={products} onAddToCart={addToCart} />
          </div>
        </section> 
      </main>
  )
}

