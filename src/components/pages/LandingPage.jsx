import ProductList from '../functions/Product.jsx'
import Cart from '../functions/Cart.jsx'
import '../../assets/styles/Landing.css'

export default function LandingPage({cart, products, addToCart}) {
  // const [cart, setCart] = useState({ storage: [], totalPrice: 0, size: 0 })

  return (
      <section className="landing-body">
        <section>
            <Cart cart={cart} />
        </section>
        <section>
            <ProductList products={products} onAddToCart={addToCart} />
        </section> 
      </section>
  )
}

