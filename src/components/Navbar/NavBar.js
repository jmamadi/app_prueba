import './NavBar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = ({ title, ...rest }) => { //{ title: 'ecommerce ', color='red'}
  // const { title, color } = props
  const handleCafe = () => {
    console.log('Cafe')
  }
  const handleTazas = () => {
    console.log('Tazas')
  }
  const handleDesayunos = () => {
    console.log('Desayunos')
  }
//  const handleCarrito = () => {
//    console.log('Carrito')
//  }

  return (
      <nav className="NavBar">
        <div>
            <img src={'./images/logo.png'} alt='logo'/>
        </div>
        <h3>{title}</h3>
        <div>
          <CartWidget />
        </div>
        <div className="Categories">
          <Button handleClick={handleCafe}>Cafe</Button>
          <Button handleClick={handleTazas}>Tazas</Button>
          <Button handleClick={handleDesayunos}>Desayunos</Button>
        </div>
      </nav>
  )
}

export default NavBar
