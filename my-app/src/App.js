import './App.css';
import Footer from './componentes/Footer/Footer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/navBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer titulo="Hola Mundo"/>
      <Footer/>
    </div>
  );
}

export default App;
