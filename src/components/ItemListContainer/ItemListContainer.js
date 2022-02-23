import React from 'react'
import { useEffect, useState } from 'react';
import { traerProductos } from '../../mock/products';
import ItemList from '../ItemList/ItemList';




const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        traerProductos().then(item => {
                setProducts(item);
            }).catch((err) => {
                console.log(err);
            })

            return (() => {
                setProducts()
            })

    }, []);

    return (
        <div>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
