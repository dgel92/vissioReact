import './App.css';
import Footer from './componentes/Footer/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import NavBar from './componentes/navBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/*<ItemListContainer titulo="Hola Mundo"/> */}
      {<ItemDetailContainer/>}
      <Footer/>
    </div>
  );
}

export default App;
