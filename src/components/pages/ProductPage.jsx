import ProductList from '../functions/Product';
import '../../assets/styles/Product.css';

export default function ProductPage({products, addToCart, excludeItem}) {

  return (
      <main>
        <section className="product-body">
            <ProductList products={products} addToCart={addToCart} excludeItem={excludeItem} />
        </section>
      </main>
  )
}

