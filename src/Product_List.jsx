import React from 'react';
import { Button } from './Button.jsx';
import { ProductCard } from './Product_Card.jsx';
import './assets/styles/Product_List.css';

// lista de cards
export function ProductList() {
    return (
        <div>
            <h2>Lista de Produtos</h2>
            <section className="ProductList">
                <ProductCard product={{ name: "Produto 1", price: "R$ 109,00" }}/>
                <ProductCard product={{ name: "Produto 2", price: "R$ 59,00" }}/>
            </section>
            <Button text="Adicionar ao Carrinho"/>
        </div>

    );
}