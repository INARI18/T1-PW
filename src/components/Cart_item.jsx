import '../assets/styles/Cart_item.css';

export function Cart_item({ item }) {

    return (
        <section className="cart_item">
            <h2>{item.name}</h2>
            <section className="item_details">
                <p>{item.name}</p>
                <p>{item.price}</p>
            </section>
        </section>
    );
}