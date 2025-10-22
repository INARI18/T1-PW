import { ProductList } from '../components/Product_List';

export default function ProductPage() {

  const products = [
    { id: 1, name: 'Prod 1', price: 109.5 }, 
    { id: 2, name: 'Prod 2', price: 59.05 }, 
    { id: 3, name: 'Prod 3', price: 29.90 },
    { id: 4, name: 'Prod 4', price: 35.50 },
    { id: 5, name: 'Prod 5', price: 90.10 },
    { id: 6, name: 'Prod 6', price: 12.00 }
  ]

  return (
      <main>
        <section>
          <div className="product-Section">
            <ProductList products={products} />
          </div>
        </section>
      </main>
  )
}

