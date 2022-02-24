import './NavBar.css'
import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProduct } from '../../mock/products';
import { useParams } from 'react-router-dom'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const ItemDetailContainer = () => {
  const 
//  const handleCarrito = () => {
//    console.log('Carrito')
//  }

  return (
      <nav className="NavBar">
        <div>
            <img src={'./images/logo.png'} alt='logo'/>
        </div>
        <h3>{title}</h3>
        <div className="Categories">
          <Button handleClick={handleCafe}>Cafe</Button>
          <Button handleClick={handleTazas}>Tazas</Button>
          <Button handleClick={handleDesayunos}>Desayunos</Button>
        </div>
        <div>
          <CartWidget />
        </div>
      </nav>
  )
}

export default NavBar