import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../mock/products';



const ItemListContainer = () => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(item => {
                setProducts(item);
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                setLoading(false)
            })

            return (() => {
                setProducts()
            })

    }, []);

    return (
        <div>
            {
                loading ? 
                    <h1>Cargando...</h1> :  
                products.length ? 
                    <ItemList products={products}/> : 
                    <h1>No se encontraron productos!</h1>
            }
        </div>
    );
};

export default ItemListContainer;
