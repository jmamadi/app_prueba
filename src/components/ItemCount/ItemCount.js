import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock = 1, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }
   }

   const decrement = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }
   }

    return(
        <div align="center">
            <div className='EstiloCuadroIndividual'>
                <div>
                    <p className='Info'>Cantidad {quantity}</p>
                </div>
                <div className='fila'>
                    <div className="fila bordeTablaProductos btnProducto" onClick={()=> decrement() }>-</div>
                    <div className="fila bordeTablaProductos btnProducto" onClick={() => onAdd(quantity)}>Agregar al carrito</div>
                    <div className="fila bordeTablaProductos btnProducto" onClick={() => increment() }>+</div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount
