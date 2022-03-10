import './NavBar.css'
import { useEffect, useState, useContext} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { getDocs, collection } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'
import CartWidget from '../CartWidget/CartWidget'
import CartContext from '../../context/CartContext'

// import ItemDetail from '../ItemDetail/ItemDetail'
// import { useParams } from 'react-router-dom'
// import Button from '../Button/Button'

const NavBar = () => {
  const [categories, setCategories] = useState([])

  const { products } = useContext(CartContext)

  useEffect(() => {
      getDocs(collection(firestoreDb, 'categories')).then(response => {
        const categories = response.docs.map(cat => {
          return { id: cat.id, ...cat.data()}
        })
        setCategories(categories)
      })
  }, [])

return (
      <nav className="NavBar">
        <div>
            <Link to={`/`}><img src={'./../images/logo.png'} alt='logo'/></Link>
        </div>
        <h3>Tienda Online de Cafe</h3>
        <div className="Categories">
          {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }>{cat.description}</NavLink>)}
        </div>
        <div>
          {products.length > 0 && <CartWidget />}
        </div>
      </nav>
  )
}

export default NavBar
