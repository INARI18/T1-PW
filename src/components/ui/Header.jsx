import "../../assets/styles/Ui.css";
import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <main>
      <header>
        <Link to="/">
          <h1>Minha Loja</h1>
        </Link>
      </header>
    </main>
  );
}
