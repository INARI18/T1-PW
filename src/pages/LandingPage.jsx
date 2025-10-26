import ProductList from '../components/functions/Product.jsx'
import Cart from '../components/functions/Cart.jsx'
import '../assets/styles/Landing.css'
import  {Link}  from 'react-router-dom';

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
            <Link to = "/products" ><h2>Lista de Produtos</h2></Link>
            <ProductList 
              products={products} 
              onAddToCart={addToCart}/>
        </section> 
      </section>
  )
}

