import '../assets/styles/Item.css'
import { Link } from 'react-router-dom';

export default function ItemPage({products}) {
    return (
        <section className="item-body">
            <section>
                <Link to = "/products/item" ><h2>Carrinho</h2></Link>
                
            </section>
        </section>
    );
}