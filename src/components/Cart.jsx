import '../assets/styles/Cart.css'
import { Cart_item } from './Cart_item'
import { Button } from './ui/Button'

export function Cart({ cart }) {
    return (
        <div>
            <h2>Carrinho</h2>
                <section className= "Cart">
                    <section className="Cart_List">
                        <ul>
                            <li><p><b>Itens:</b> {cart.size}</p></li>
                            <li><p><b>Total:</b> {cart.totalPrice}</p></li>
                        </ul>
                        {cart.storage.map((item) => (
                            <Cart_item key={item.id} item={item} />
                        ))}
                        <Button text="Limpar" variant='clear' />
                    </section>
                </section>
        </div>
    );
}