import ProductList from '../functions/Product';
import '../../assets/styles/Product.css';

export default function ProductPage({products, addToCart}) {

  return (
      <main>
        <section className="product-body">
            <ProductList products={products} addToCart={addToCart} />
        </section>
      </main>
  )
}

