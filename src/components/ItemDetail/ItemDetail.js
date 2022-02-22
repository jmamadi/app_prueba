import Item from '../Item/Item';

const ItemDetail = ({ products }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {products.map(product =><Item key={product.id} product={product}/>
            )}
        </div>
    );
};

export default ItemDetail;
