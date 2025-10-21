import React from 'react';
import { ProductCard } from '../components/Product_Card';
import '../assets/styles/Product_List.css';

// lista de cards
export function ProductList({ products = [] }) {
    return (
        <div>
            <h2 style={{ color: 'black' }}>Lista de Produtos</h2>
            <section className="ProductList">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p style={{color:'black'}}>Nenhum produto disponível no momento</p>
                )}
            </section>
        </div>
    );
}