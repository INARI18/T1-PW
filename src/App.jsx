import MainLayout from "./components/ui/MainLayout.jsx";
import "./assets/styles/Landing.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import ProductsPage from "./pages/ProductsPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ItemPage from "./pages/Item.jsx";
import Error404 from "./pages/404.jsx";
import DataBase from "./assets/DataBase.json";
import React from "react";

export default function App() {
  const [cart, setCart] = useState({
    storage: [],
    totalPrice: 0,
    size: 0,
    idCounter: 1,
  });

  const addToCart = (product) => {
    setCart((prevCart) => {
      const newItem = { ...product, id: prevCart.idCounter };
      console.log("Adicionando item:", newItem);

      const newStorage = [...prevCart.storage, newItem];
      const newTotalPrice = parseFloat(
        (prevCart.totalPrice + newItem.price).toFixed(2)
      );
      const newSize = prevCart.size + 1;
      const newIdCounter = prevCart.idCounter + 1;
      return {
        storage: newStorage,
        totalPrice: newTotalPrice,
        size: newSize,
        idCounter: newIdCounter,
      };
    });
  };

  const clearCart = () => {
    cart.storage.map((item) => {
      excludeItem(item);
    });
    return;
  };

  const excludeItem = (item) => {
    console.log("Excluindo item:", item);
    setCart((prevCart) => {
      const newTotalPrice = parseFloat(
        (prevCart.totalPrice - item.price).toFixed(2)
      );
      const newSize = prevCart.size - 1;
      const newStorage = prevCart.storage.filter(
        (cartItem) => cartItem.id !== item.id
      );
      return {
        storage: newStorage,
        totalPrice: newTotalPrice,
        size: newSize,
        idCounter: prevCart.idCounter,
      };
    });
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout cart={cart} />}>
            <Route
              index
              element={
                <LandingPage
                  cart={cart}
                  products={DataBase.products}
                  addToCart={addToCart}
                  clearCart={clearCart}
                  excludeItem={excludeItem}
                />
              }
            />
            <Route
              path="products"
              element={
                <ProductsPage
                  products={DataBase.products}
                  addToCart={addToCart}
                />
              }
            />
            <Route
              path="cart"
              element={
                <CartPage
                  cart={cart}
                  clearCart={clearCart}
                  excludeItem={excludeItem}
                />
              }
            />
            <Route
              path="item/:id"
              element={
                <ItemPage products={DataBase.products} addToCart={addToCart} />
              }
            />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
