import { useEffect, useState } from 'react';
import { traerProducto } from '../../mock/products';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const { productId } = useParams();

    useEffect(() => {
        traerProducto(productId).then(item => {
                setProduct(item);
            })
            .catch(err => {
                console.log(err);
            })
            return (() => {
                setProduct();
            });
    }, [productId]);

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    );
};

export default ItemDetailContainer;
