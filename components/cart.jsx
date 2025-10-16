import './cart.css'
import { Button } from './ui/button'

export function Cart({ cartItems }) {

    const item = {
        name: "P1",
        price: "R$ 109,00"
    }

    const item1 = {
        name: "P2",
        price: "R$ 59,00"
    }

    const item2 = {
        name: "P3",
        price: "R$ 89,00"
    }

    return (
        <div>
            <div className="cart-div">
                <div className='product'>
                    <h3>{item.name}</h3>
                </div>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
            </div>
            <div className="cart-div">
                <div className='product'>
                    <h3>{item1.name}</h3>
                </div>
                    <p>{item1.name}</p>
                    <p>{item1.price}</p>
            </div>
            <div className="cart-div">
                <div className='product'>
                    <h3>{item2.name}</h3>
                </div>
                    <p>{item2.name}</p>
                    <p>{item2.price}</p>
            </div>
            <Button text="Finalizar Compra" />
        </div>
    );
}