import '../assets/styles/Cart.css'
import Cart  from '../components/functions/Cart'
import { Link } from 'react-router-dom';

export default function CartPage({cart, clearCart, excludeItem}) {
    return (
        <section className="cart-body">
            <section>
                <Link to = "/cart" ><h2>Carrinho</h2></Link>
                <Cart 
                    cart={cart} 
                    clearCart={clearCart} 
                    excludeItem={excludeItem}/>
            </section>
        </section>
    );
}