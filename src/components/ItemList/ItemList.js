import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ products }) => {     /* = []*/
    return (
        <ul
            style={{
                display: 'flex',
                flexDirection: 'row',
                margin: '10px',

            }}
        >
            {products.map(product => <Item key={product.id} product={product}/>)}
        </ul>
    );
};

export default React.memo(ItemList)