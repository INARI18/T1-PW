import '../assets/styles/Cart.css'
import {Cart_item} from './Cart_item'
import { Button } from './ui/Button'

export function Cart({ cart }) {

    let i;
    return (
        <div>
            <h2>Carrinho</h2>
            <p>Itens: {cart.size}</p>
            <p>Total: {cart.total_price}</p>
            <section className="Cart_List">
                {cart.storage.map((item) => (
                    <Cart_item item={item} />
                ))}
            </section>
            <Button text="Finalizar Compra" />
        </div>
    );
}