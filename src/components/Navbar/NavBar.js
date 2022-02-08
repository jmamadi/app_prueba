import './NavBar.css'

const NavBar = () => {

  return (
      <nav className="NavBar">
        <div>
            <img src={'./images/logo.png'} alt='logo'/>
        </div>
        <div className="Categories">
            <a class="navbarDecoration" href="index.html"><button className='Option'>Cafe</button></a>
            <a class="navbarDecoration" href="index.html"><button className='Option'>Tazas</button></a>
            <a class="navbarDecoration" href="index.html"><button className='Option'>Desayunos</button></a>
        </div>
      </nav>
  )
}

export default NavBar
