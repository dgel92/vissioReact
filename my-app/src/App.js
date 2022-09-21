import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItenCount/ItenCount';
import NavBar from './componentes/navBar/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer titulo="Hola Mundo"/>
      <ItemCount stock={10} inicial={1}/>
    </div>
  );
}

export default App;
