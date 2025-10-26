import ProductList from '../components/functions/Product.jsx'
import Cart from '../components/functions/Cart.jsx'
import '../assets/styles/Landing.css'

export default function LandingPage({cart, products, addToCart, clearCart, excludeItem}) {
  // const [cart, setCart] = useState({ storage: [], totalPrice: 0, size: 0 })

  return (
      <section className="landing-body">
        <section>
            <Cart 
              cart={cart} 
              clearCart={clearCart}
              excludeItem={excludeItem}/>
        </section>
        <section>
            <ProductList 
              products={products} 
              onAddToCart={addToCart}/>
        </section> 
      </section>
  )
}

