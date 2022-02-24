import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../mock/products';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        getProducts(categoryId).then(item => {
                console.log(categoryId)
                setProducts(item);
            }).catch((err) => {
                console.log(err);
            }).finally(() => {
                setLoading(false)
            })

            return (() => {
                setProducts()
            })

    }, [categoryId]);

    return (
        <div>
            {
                loading ? <h1>Cargando...</h1> : <ItemList products={products}/>
            }
        </div>
    );
};

export default ItemListContainer;