import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import GeneralCart from "./GeneralCart.jsx";
import React from "react";
import PropTypes from "prop-types";

export default function MainLayout({ cart }) {
  return (
    <main>
      <Header />
      <GeneralCart cart={cart} />
      <Outlet />
      <Footer />
    </main>
  );
}

MainLayout.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
