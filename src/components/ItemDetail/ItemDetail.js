import './ItemDetail.css'
//import Item from '../ItemDetail/ItemDetail';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ product }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                border: '2px solid brown',
                margin: '10px',
                width: '500px',
            }}
        >
            <h1>{product.name}</h1>
            <picture> <img src={product.img} alt={product.name} className="ItemImg"  /> </picture>
            <p>Categoría: {product.category}</p>
            <h2>$ {product.price}</h2>
            <p>{product.description}</p>
            <footer>
            <ItemCount stock={product.stock} />
            </footer>
        </div>
    );
};

export default ItemDetail;
