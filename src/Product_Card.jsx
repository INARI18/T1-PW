import './assets/styles/Product_Card.css';


export function ProductCard( { product } ) {
    return (
        <div className="product-card">
            <div className='product-div'>
                <h1>{product.name}</h1>
            </div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>
    );
}