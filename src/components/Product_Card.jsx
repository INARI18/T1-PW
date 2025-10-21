import '../assets/styles/Product_Card.css';
import { Button } from './ui/Button';

export function ProductCard( { product, onAddToCart } ) {
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