import ProductList from '../components/Product';

export default function ProductPage({products}) {

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

