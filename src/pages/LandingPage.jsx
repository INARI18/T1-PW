import ProductList from "../components/Product.jsx";
import Cart from "../components/Cart.jsx";
import "../assets/styles/Landing.css";
import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

export default function LandingPage({
  cart,
  products,
  addToCart,
  clearCart,
  excludeItem,
}) {
  return (
    <section className="landing-body">
      <section>
        <Link to="/cart">
          <h2>Carrinho</h2>
        </Link>
        <Cart cart={cart} clearCart={clearCart} excludeItem={excludeItem} />
      </section>
      <section>
        <Link to="/products">
          <h2>Lista de Produtos</h2>
        </Link>
        <ProductList products={products} onAddToCart={addToCart} />
      </section>
    </section>
  );
}

LandingPage.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func,
  clearCart: PropTypes.func,
  excludeItem: PropTypes.func,
};
