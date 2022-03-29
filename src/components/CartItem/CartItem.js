import './CartItem.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'


const CartItem = ({ id, name, quantity, price, img }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = () => {
        removeItem(id)
    }

    return (
        <div className='baseCentral'>
        <article className='CardCartItem'>
            <header className="HeaderCartItem">
                <h2 className="ItemHeaderCartItem">
                    {name}
                </h2>
            </header>
            <section className='ContainerItemCartItem'>
                <img src={img} alt={name} className="ItemImg"/>
                <p className="InfoCartItem">Cantidad: {quantity}</p>
                <p className="InfoCartItem">Precio x Unidad: ${price}</p>
            </section>
            <footer className='ItemFooterCartItem'>
                 <p className="InfoCartItem">
                     Subtotal: ${price * quantity}
                 </p>
                 <button className='fila bordeTablaProductos btnProductoRemover' onClick={() => handleRemove()}>Remover</button>
            </footer>
        </article>
        </div>
    )
}

export default CartItem
