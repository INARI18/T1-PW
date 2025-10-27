import "../../assets/styles/Ui.css";
import { Link } from "react-router-dom";

export default function GeneralCart({ cart }) {
  return (
    <main>
      <section className="General-Cart">
        <Link to="/cart">
          <h1>Carrinho ({cart.size}) </h1>
        </Link>
      </section>
    </main>
  );
}
