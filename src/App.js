import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemCart from './components/ItemCart/ItemCart'


const App = () => {

  return (
    <body className='BodyFormat'>
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
          <Route path='/carrito/' element={<ItemCart />}/>
        </Routes>
      </BrowserRouter>
    </div>
    </body>
  );
}

export default App;
