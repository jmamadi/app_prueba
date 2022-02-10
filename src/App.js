import './App.css';
import NavBar from './components/NavBar/NavBar';
import Catalogo from './components/Catalogo/Catalogo';

function App() {
  return (
    <>
    <div className="App">
      <NavBar title="Tienda Online" />
    </div>
    <div>
      <Catalogo title="Futuro Catálogo" />
    </div>
    </>
  );
}

export default App;
