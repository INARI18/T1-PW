import '../../assets/styles/Cart.css'
import Button from '../ui/Button'
import { Link } from 'react-router-dom';

export default function Cart({cart, clearCart, excludeItem}) {

    const handleClear = () => {
        clearCart();
    }
    return (
        <div>
            <Link to = "/cart" ><h2>Carrinho</h2></Link>
                <section className= "Cart">
                    <section className="Cart_List">
                        <ul>
                            <li><p><b>Itens:</b> {cart.size}</p></li>
                            <li><p><b>Total:</b> {cart.totalPrice}</p></li>
                        </ul>
                        {cart.storage.map((item) => (
                            <Cart_item item={item} excludeItem={excludeItem}/>
                        ))}
                        <Button text="Limpar" variant='clear' onClick={handleClear}/>
                    </section>
                </section>
        </div>
    );
}


function Cart_item({item , excludeItem}) {

    const deleteItem = () => {
        if (excludeItem) excludeItem(item);
    }

    return (
        <section className="cart_item">
            <h2>{item.name}</h2>
            <section className="item_details">
                <ul style={{marginLeft:'20px'}}>
                    <li> <p>{item.name}</p></li>
                    <li> <p>{item.price}</p></li>
                </ul>
            </section>
                <div><Button text="Excluir" variant='delete' onClick={deleteItem}/>
                </div>
        </section>
    );
}