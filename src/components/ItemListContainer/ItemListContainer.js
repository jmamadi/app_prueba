import { useEffect, useState } from 'react';
import { traerProductos } from '../../mock/products';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ title }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        traerProductos
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            {loading ? (
                <h1>Cargando...</h1>
            ) : (
                <>
                    <ItemList products={products} />
                </>
            )}
        </>
    );
};

export default ItemListContainer;