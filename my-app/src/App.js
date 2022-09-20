import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/navBar/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer titulo="Hola Mundo"/>
    </div>
  );
}

export default App;
