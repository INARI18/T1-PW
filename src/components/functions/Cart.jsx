import '../../assets/styles/Cart.css'
import Button from '../ui/Button'

export default function Cart({cart, clearCart, excludeItem}) {

    const handleClear = () => {
        clearCart();
    }
    
    return (
        <div>
                    <section className="Cart_List">
                        <ul>
                            <li><p><b>Itens:</b> {cart.size}</p></li>
                            <li><p><b>Total:</b> {cart.totalPrice}</p></li>
                        </ul>
                        {cart.size > 0 ? (
                            cart.storage.map((item) => (
                            <Cart_item 
                            key={item.id}
                            item={item} 
                            excludeItem={excludeItem}/>
                        ))) : (
                            <p style={{color:'black'}}>Nenhum produto disponível no momento</p>
                        )}
                        <Button text="Limpar" variant='clear' onClick={handleClear}/>
                    </section>
        </div>
    );
}


function Cart_item({item , excludeItem}) {

    const handleExclude = () => {
        if (excludeItem) excludeItem(item);
    }

    return (
        <section className="cart_item">
            <h2>{item.name}</h2>
            <section className="item_details">
                <ul>
                    <li> <p>{item.name}</p></li>
                    <li> <p>{item.price}</p></li>
                </ul>
            </section>
                <div><Button text="Excluir" variant='delete' onClick={handleExclude}/>
                </div>
        </section>
    );
}