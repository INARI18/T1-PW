import '../../assets/styles/Cart.css'
import Cart  from '../functions/Cart'

export default function CartPage({cart, clearCart}) {
    return (
        <section className="cart-body">
            <section>
                <Cart cart={cart} clearCart={clearCart}/>
            </section>
        </section>
    );
}