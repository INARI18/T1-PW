import "../assets/styles/Product.css";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";

// lista de cards
export default function ProductList({ products = [], onAddToCart }) {
  return (
    <div>
      <section className="ProductList">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))
        ) : (
          <p style={{ color: "black" }}>Nenhum produto disponível no momento</p>
        )}
      </section>
    </div>
  );
}

function ProductCard({ product, onAddToCart }) {
  const handleBuy = (e) => {
    e.stopPropagation();
    if (onAddToCart) onAddToCart(product);
  };

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/item/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <h1>{product.name}</h1>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{`R$ ${product.price}`}</p>
      </div>
      <Button text="Comprar" variant="buy" onClick={handleBuy} />
    </div>
  );
}
