import ProductList from '../functions/Product';
import '../../assets/styles/Product.css';

export default function ProductPage({products}) {

  return (
      <main>
        <section className="product-body">
            <ProductList products={products} />
        </section>
      </main>
  )
}

