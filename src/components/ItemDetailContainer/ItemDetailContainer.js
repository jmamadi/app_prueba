import { useEffect, useState } from 'react';
import { traerProducto } from '../../mock/products';
import ItemDetail from '../ItemDetail/ItemDetail';
// import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const { productId } = 0;
//    const { productId } = useParams();

    useEffect(() => {
        traerProducto(productId).then(item => {
            console.log(item);
            setProduct(item);
            })
            .catch(err => {
                console.log(err);
            })
           // return (() => {
           //     setProduct();
           // });
    }, []);

    return (
        
        <div>
        {console.log(product)}
            <ItemDetail product={product} />
        </div>
    );
};

export default ItemDetailContainer;
