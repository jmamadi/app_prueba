import { useEffect, useState } from 'react';
import { traerProducto } from '../../mock/products';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = ({ title }) => {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        traerProducto
            .then((res) => {
                setProduct(res);
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
                    <ItemDetail products={products} />
                </>
            )}
        </>
    );
};

export default ItemDetailContainer;
