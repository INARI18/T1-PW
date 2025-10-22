import ProductList from '../components/Product.jsx'
import Cart from '../components/Cart.jsx'
import '../assets/styles/Landing.css'

export default function LandingPage({cart, products}) {
  // const [cart, setCart] = useState({ storage: [], totalPrice: 0, size: 0 })

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

