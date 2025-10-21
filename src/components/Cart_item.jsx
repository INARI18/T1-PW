import '../assets/styles/Cart_Item.css';
import { Button } from './ui/Button';

export function Cart_item({ item }) {

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