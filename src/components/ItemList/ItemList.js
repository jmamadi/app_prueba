import Item from '../Item/Item';

const ItemList = ({ products }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {products.map((product) => (
                <Item {...product} key={product.id} />
            ))}
        </div>
    );
};

export default ItemList;
