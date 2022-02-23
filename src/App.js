import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import ItemCount from './components/ItemCount/ItemCount';

/*  BORRAR
import Counter from './components/Counter/Counter';
import Navbar from './components/Navbar/Navbar';
*/

function App() {
  //const addToCart = (number) => {
 //   console.log(`Se agregaron al carrito ${number} items`);
  // };
  return (
    <>
    <div className="App">
    <NavBar title="Tienda Online" />
    <ItemListContainer title="Catalogo" />
    <ItemDetailContainer title="Detalle" />
    </div>
    </>
  );
}

export default App;
