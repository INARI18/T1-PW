import React from 'react';
import { Button } from './ui/button';
import './productsList.css';
import './productCard.css';

// card individual de produto
export function ProductCard( { product } ) {
    return (
        <div className="product-card">
            <div className='product-div'>
                <h1>{product.name}</h1>
            </div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Button text="Adicionar ao Carrinho"/>
        </div>
    );
}

// lista de cards
export function ProductsList() {
    return (
        <div>
        </div>
    );
}