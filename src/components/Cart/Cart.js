import './Cart.css'
import { useState, useContext, useRef } from 'react'
import Togglable from '../Togglable/Togglable'
import ContactForm from '../ContactForm/ContactForm'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { writeBatch, getDocs, collection, addDoc, Timestamp, where, query, documentId } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'
import { useNotificationServices } from '../../services/notification/NotificationServices'
import { Link } from 'react-router-dom'

const Cart = () => {
    const [processingOrder, setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        comment: ''
    })
    const { products, clearCart, getTotal, removeItem } = useContext(CartContext)
    const contactFormRef = useRef()

    const setNotification = useNotificationServices()

    const confirmOrder = () => {
        if(contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') {
            setProcessingOrder(true)

            const objOrder = {
                buyer: contact,
                items: products,
                total: getTotal(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(firestoreDb)
            const outOfStock = []

            const ids = objOrder.items.map(i => i.id)

            getDocs(query(collection(firestoreDb, 'products'),where(documentId(), 'in', ids)))
                .then(response => {
                    response.docs.forEach((docSnapshot) => {
                        if(docSnapshot.data().stock >= objOrder.items.find(prod => prod.id === docSnapshot.id).quantity) {
                            batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - objOrder.items.find(prod => prod.id === docSnapshot.id).quantity})
                        } else {
                            outOfStock.push({id: docSnapshot.id, ...docSnapshot.data()})
                        }
                    })
                }).then(() => {
                    if(outOfStock.length === 0) {
                        addDoc(collection(firestoreDb, 'orders'), objOrder).then(({id}) => {
                            batch.commit()
                            clearCart()
                            setNotification('success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
                        })
                    } else {
                        outOfStock.forEach(prod => {
                            setNotification('error', `El producto ${prod.name} no tiene stock disponible`)
                            removeItem(prod.id)
                        })
                    }
                }).catch((error) => {
                    setNotification('error', error)
                }).finally(() => {
                    setProcessingOrder(false)
                })

        } else {
             setNotification('error', 'Debe completar los datos de contacto para generar la orden')
        }
    }

    if(processingOrder) {
        return <h1>Se esta procesando su orden</h1>
    }

    if(products.length === 0) {
        return (
            <div>
                <h1>Cart</h1>
                <h2>No hay productos en el carrito, <Link to={`/`}>volver a menu principal</Link></h2>
            </div>
        )
    }

    return (
        <div>
            <h1>Carrito de compras</h1>
            { products.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${getTotal()}</h3>
            <button onClick={() => clearCart()} className="fila bordeTablaProductos btnProducto">Cancelar compra</button>
            <button onClick={() => confirmOrder()} className="fila bordeTablaProductos btnProducto">Confirmar Compra</button>
            {
                (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') &&

                    <div>
                        <h4>Nombre: {contact.name}</h4>
                        <h4>Telefono: {contact.phone}</h4>
                        <h4>Direccion: {contact.address}</h4>
                        <h4>Comentario: {contact.comment}</h4>
                        <button onClick={() => setContact({ phone: '', address: '', comment: ''})}
                                className='Button'
                                style={{backgroundColor: '#db4025'}}>
                            Borrar datos de contacto
                        </button>
                    </div>
            }
            <Togglable buttonLabelShow={
                        (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '')
                            ? 'Editar contacto'
                            : 'Agregar contacto'
                        }
                        ref={contactFormRef}>
                <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
            </Togglable>
        </div>
    )
}

export default Cart
