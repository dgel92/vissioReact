import './App.css';
import Footer from './componentes/Footer/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import NavBar from './componentes/navBar/NavBar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemPortada from './componentes/Portada';
import SobreNosotros from './componentes/SobreNosotros';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<ItemPortada/>}/>
            
            <Route path="/tienda" element={<ItemListContainer/>}/>
            <Route path="/tienda/:tiendaid" element={<ItemListContainer/>}/>

            <Route path="/sobreNosotros" element={<SobreNosotros/>}/> 
            <Route path="/Producto/:productoid" element={<ItemDetailContainer/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;