import '../../assets/styles/Product.css';
import Button from '../ui/Button';
import  {Link}  from 'react-router-dom';

// lista de cards
export default function ProductList({ products = [], onAddToCart }) {
    return (
        <div>
            <Link to = "/products" ><h2>Lista de Produtos</h2></Link>
            <section className="ProductList">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard 
                        key={produto.id}
                        product={product} 
                        onAddToCart={onAddToCart} />
                    ))
                ) : (
                    <p style={{color:'black'}}>Nenhum produto disponível no momento</p>
                )}
            </section>
        </div>
    );
}

function ProductCard( {product, onAddToCart} ) {

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