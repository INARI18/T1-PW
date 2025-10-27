import ProductList from "../components/Product";
import "../assets/styles/Product.css";
import { Link } from "react-router-dom";

export default function ProductsPage({ products, addToCart, excludeItem }) {
  return (
    <main>
      <section className="product-body">
        <Link to="/products">
          <h2>Lista de Produtos</h2>
        </Link>
        <ProductList
          products={products}
          addToCart={addToCart}
          excludeItem={excludeItem}
        />
      </section>
    </main>
  );
}
