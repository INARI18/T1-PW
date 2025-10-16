import './App.css'
import { ProductsList } from '../components/productsList'
import { ProductCard } from '../components/productsList'
import { Cart } from '../components/cart'

export default function App() {
  
  // const [cartItems, setCartItems] = useState([])
  // const [products, setProducts] = useState([])

  const product = {
    name: "P1",
    price: "R$ 109,00"
  }

  return (
      <main>
        <header>
          <h1>Minha Loja</h1>
        </header>
        <section>
          <h2>Carrinho</h2>
          <div className='cart-section'>
            <Cart />
          </div>
        </section>
        <section>
          <h2>Lista de Produtos</h2>
          <div className="product-Section">
            <ProductCard product={product} />
          </div>
        </section>
        <footer>
          <p></p>
        </footer>
      </main>
  )
}

