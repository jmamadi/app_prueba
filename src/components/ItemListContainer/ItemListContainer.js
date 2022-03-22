import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firebase'
import ItemList from '../ItemList/ItemList'
import { useNotificationServices } from '../../services/notification/NotificationServices'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    const setNotification = useNotificationServices()
     
    useEffect(() => {
        setLoading(true)

        getProducts(categoryId).then(response => {
            setProducts(response)
        }).catch((error) => {
            setNotification('error', error)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProducts()
        })          
    }, [categoryId]) // eslint-disable-line
    
    return (
        <div>
            {
                loading ?
                    <h1>Cargando...</h1> :
                products.length ?
                    <ItemList products={products}/> :
                    <h1>No hay productos encontrados!</h1>
            }
        </div>
    )
}

export default ItemListContainer
