import './assets/styles/App.css'
import { ProductList } from './components/Product_List.jsx'
import { Cart } from './components/Cart'

export default function App() {
  
  // const [cartItems, setCartItems] = useState([])
  // const [products, setProducts] = useState([])

  const cart = {
    storage: [
      {
        name: "Produto 1",
        price: "R$ 109,00"
      }
    ],
    total_price: "R$ 109,00",
    size: 1
  }

  const product = {
    name: "Produto 1",
    price: "R$ 109,00"
  }

  return (
      <main>
        <header>
          <h1>Minha Loja</h1>
        </header>
        <section>
            <Cart cart={cart} />
        </section>
        <section>
          <div className="product-Section">
            <ProductList product={product} />
          </div>
        </section>
        <footer>
          <p></p>
        </footer>
      </main>
  )
}

