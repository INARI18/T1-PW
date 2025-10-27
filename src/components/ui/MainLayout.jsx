import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import GeneralCart from "./GeneralCart.jsx";

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
