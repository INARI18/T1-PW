import React from 'react';
import { ProductCard } from '../components/Product_Card';
import '../assets/styles/Product_List.css';
import { Link } from 'react-router-dom'

// lista de cards
export function ProductList({ products = [], onAddToCart }) {
    return (
        <div>
            <h2 style={{ color: 'black' }}>
                Lista de Produtos
                </h2>
            <section className="ProductList">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                    ))
                ) : (
                    <p style={{color:'black'}}>Nenhum produto disponível no momento</p>
                )}
            </section>
        </div>
    );
}