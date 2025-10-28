import "../assets/styles/Cart.css";
import Cart from "../components/Cart";
import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

export default function CartPage({ cart, clearCart, excludeItem }) {
  return (
    <section className="cart-body">
      <section>
        <Link to="/T1-PW/cart">
          <h2>Carrinho</h2>
        </Link>
        <Cart cart={cart} clearCart={clearCart} excludeItem={excludeItem} />
      </section>
    </section>
  );
}

CartPage.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  clearCart: PropTypes.func,
  excludeItem: PropTypes.func,
};
