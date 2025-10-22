import '../../assets/styles/Cart.css'
import Button from '../ui/Button'
import { Link } from 'react-router-dom';

export default function Cart({ cart}) {
    return (
        <div>
            <Link to = "/cart" ><h2>Carrinho</h2></Link>
                <section className= "Cart">
                    <section className="Cart_List">
                        <ul>
                            <li><p><b>Itens:</b> {cart.size}</p></li>
                            <li><p><b>Total:</b> {cart.totalPrice}</p></li>
                        </ul>
                        {Object.entries(cart.storage).map((item) => (
                            <Cart_item item={item}/>
                        ))}
                        <Button text="Limpar" variant='clear' />
                    </section>
                </section>
        </div>
    );
}


function Cart_item({ item }) {

    return (
        <section className="cart_item">
            <h2>{item.name}</h2>
            <section className="item_details">
                <ul>
                    <li> <p>{item.name}</p></li>
                    <li> <p>{item.price}</p></li>
                </ul>
            </section>
            <Button text="Excluir" />
        </section>
    );
}