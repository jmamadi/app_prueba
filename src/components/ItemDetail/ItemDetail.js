import Item from '../Item/Item';

const ItemDetail = ({ product=[] }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                border: '2px solid brown',
                margin: '10px',
                width: '300px',
            }}
        >
            <img src={product.img} width="300px" alt={product.name} />
            <h1>{product.name}</h1>
            <h2>$ {product.price}</h2>
            <p>{product.descripcion}</p>
        </div>
    );
};

export default ItemDetail;
