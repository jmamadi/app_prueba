import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
    return (
        <div className='EstiloCuadro'>
            <h1 className="ItemHeader">{product.name}</h1>
            <picture>
            <img src={product.img} alt={product.name} className="ItemImg"/>
            </picture>
            <p className="Info">$ {product.price}</p>
            <footer className='ItemFooter'>
                <Link to={`/detail/${product.id}`} className="fila bordeTablaProductos btnProducto">Ver detalle</Link>
            </footer>
        </div>
    );
};

export default Item;