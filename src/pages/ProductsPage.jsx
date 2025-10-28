import ProductList from "../components/Product";
import "../assets/styles/Product.css";
import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

export default function ProductsPage({ products, addToCart, excludeItem }) {
  return (
    <main>
      <section className="product-body">
        <Link to="T1-PW/products">
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

ProductsPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func,
  excludeItem: PropTypes.func,
};
