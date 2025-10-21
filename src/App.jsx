import './assets/styles/App.css'
import { ProductList } from './components/Product_List.jsx'
import { Cart } from './components/Cart'

export default function App() {
  
  // const [cartItems, setCartItems] = useState([])
  // const [products, setProducts] = useState([])

  const cart = {
    storage: [
      {
        name: "Prod 1",
        price: "R$ 109,00"
      }
    ],
    total_price: "R$ 109,00",
    size: 1
  }

  const products = [
    { id: 1, name: 'Prod 1', price: 'R$ 109,00' }, 
    { id: 2, name: 'Prod 2', price: 'R$ 59,00' }, 
    { id: 3, name: 'Prod 3', price: 'R$ 29,00' },
    { id: 4, name: 'Prod 4', price: 'R$ 35,50' },
    { id: 5, name: 'Prod 5', price: 'R$ 90,10' },
    { id: 6, name: 'Prod 6', price: 'R$ 12,00' }
  ]

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
            <ProductList products={products} />
          </div>
        </section>
        <footer>
          <p>Direitos Autorais. 2025.</p>
        </footer>
      </main>
  )
}

