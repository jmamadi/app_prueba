import './ItemDetail.css'
import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext'
import { useNotificationServices } from '../../services/notification/NotificationServices'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext)

    const setNotification = useNotificationServices()

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        const productToAdd = {
            id,
            name,
            price,
            img,
            category,
            description,
            stock
        }

        addItem(productToAdd, quantity)
        setNotification('success',`Has agregado ${name} al carrito`)
    }

    return (
        <div>
            <h1>{name}</h1>
            <picture> <img src={img} alt={name} className="ItemImg"  /> </picture>
            <p>Categoría: {category}</p>
            <h2>$ {price}</h2>
            <p>{description}</p>
            <footer>
            {
                quantity > 0 ?
                    <Link to={'/cart'} className='fila bordeTablaProductos btnProducto'>Ir al carrito de compras</Link> :
                    (stock>0) ? <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} /> : <button className='fila bordeTablaProductos btnProducto'>No se encontraron productos disponibles</button>
            }
            </footer>
        </div>
    );
}

export default ItemDetail;
