import '../../assets/styles/Product.css';
import Button from '../ui/Button';

// lista de cards
export default function ProductList({ products = [], onAddToCart }) {
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

function ProductCard( { product, onAddToCart } ) {
    const handleBuy = () => {
        if (onAddToCart) onAddToCart(product)
    }

    return (
        <div className="product-card">
            <div className='product-div'>
                <h1>{product.name}</h1>
            </div>
            <div className='product-info'>
                <h3>{product.name}</h3>
                <p>{`R$ ${product.price}`}</p>
                <Button text="Comprar" variant='buy' onClick={handleBuy} />
            </div>
        </div>
    );
}