import '../assets/styles/Cart.css'
import Cart_item  from '../components/Cart'
import  Button  from '../components/ui/Button'

export default function CartPage({cart}) {
    return (
        <section className="cart-body">
            <h2>Carrinho</h2>
            <section className="Cart">
                <section className="Cart_List">
                    <ul>
                        <li><p><b>Itens:</b> {cart.size}</p></li>
                        <li><p><b>Total:</b> {cart.totalPrice}</p></li>
                    </ul>
                    {cart.map((item) => (
                        <Cart_item key={item.id} item={item} />
                    ))}
                    <Button text="Limpar" variant='clear' />
                </section>
            </section>
        </section>
    );
}