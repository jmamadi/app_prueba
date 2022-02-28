import './ItemDetail.css'
//import Item from '../ItemDetail/ItemDetail';
import ItemCount from '../ItemCount/ItemCount'
import {useState} from 'react'
import { Link } from 'react-router-dom';

const ItemDetail = ({ product=[] }) => {
    const [quantity, setQuantity] = useState(0)

    const handleAdd = (quantity) => {
        setQuantity(quantity)
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <picture> <img src={product.img} alt={product.name} className="ItemImg"  /> </picture>
            <p>Categoría: {product.category}</p>
            <h2>$ {product.price}</h2>
            <p>{product.description}</p>
            <footer>
            {(quantity === 0) ? <ItemCount stock={product.stock} initial={quantity} onAdd={handleAdd}/> : <Link to='/carrito/' ><button className="Option">Ver Detaller</button></Link>}
            </footer>
        </div>
    );
};

export default ItemDetail;
