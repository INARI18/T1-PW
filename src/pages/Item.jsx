import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/styles/ItemPage.css";
import Button from "../components/ui/Button";
import PropTypes from "prop-types";
import React from "react";

export default function ItemPage({ products, addToCart }) {
  const { id } = useParams();
  const productId = Number(id);
  const product = products?.find((prod) => prod.id === productId);
  const navigate = useNavigate();

  useEffect(() => {
    if (!product) {
      navigate("/T1-PW/404");
    }
  }, [product, navigate]);

  if (!product) return null;

  const description =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam et totam voluptatum quo dolores iste laborum dolore nulla quas eum voluptates doloremque harum beatae cum maxime, consequuntur molestiae culpa illum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic recusandae magnam cum omnis beatae et facilis dolore sunt a, repellendus iste, voluptatum, rerum reprehenderit esse laudantium ducimus eum. Recusandae voluptates dolorum quia, quaerat harum soluta quibusdam. Possimus, ipsa sequi. Laudantium similique deserunt saepe distinctio, natus odit non explicabo consequuntur fuga?";

  return (
    <main className="container-itemPage">
      <div className="content">
        <div className="item-image">{product.name}</div>
        <div className="container-item-details">
          <h1 className="item-title">{product.name}</h1>
          <p className="description">
            <strong>Descrição:</strong>
            {description}
          </p>
          <div className="buy">
            <p className="item-price">R$ ${product.price}</p>
            <Button
              text={`COMPRAR`}
              variant="buyItem"
              onClick={() => addToCart(product)}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

ItemPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func,
};
