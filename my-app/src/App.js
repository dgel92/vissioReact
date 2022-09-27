import './App.css';
import Footer from './componentes/Footer/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import NavBar from './componentes/navBar/NavBar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemPortada from './componentes/Portada';
import SobreNosotros from './componentes/SobreNosotros';
import CuidadosYMantenimiento from './componentes/CuidadosYmantenimiento';
import Carrousel from './componentes/Carrousel/Carrousel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Carrousel/>
          <Routes>
            <Route path="/" element={<ItemPortada/>}/>
            <Route path="/tienda" element={<ItemListContainer/>}/>
            <Route path="/sobreNosotros" element={<SobreNosotros/>}/>
            <Route path="/CuidadosYMantenimiento" element={<CuidadosYMantenimiento/>}/>

            <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
            <Route path="/Producto/:lamparaid" element={<ItemDetailContainer/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;