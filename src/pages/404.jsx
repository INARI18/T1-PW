import { Link } from "react-router-dom";
import "../assets/styles/404.css";
import React from "react";

export default function Error404() {
  return (
    <main className="container-404">
      <h1 className="error404">404 - Pagina Não Encontrada</h1>
      <img src="../public/sad-bunny.gif" className="image-404" />
      <button>
        <Link to="/T1-PW">Voltar para a pagina inicial</Link>
      </button>
    </main>
  );
}
