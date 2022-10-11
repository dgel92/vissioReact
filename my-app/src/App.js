import './App.css';
import Footer from './componentes/Footer/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import NavBar from './componentes/navBar/NavBar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemPortada from './componentes/Portada';
import SobreNosotros from './componentes/SobreNosotros';
import { CartContextrProvider } from './componentes/CartContext/CartContext';
import CartView from './componentes/CartView/CartView';
import {ContactUs} from './contactanos/Contactanos';
import CuidadosYMantenimiento from './componentes/cuidadosYMantenimiento/CuidadosYMantenimiento';
import PostVenta from './componentes/PostVenta/PostVenta';
import TenesUnaTienda from './componentes/tenesUnaTienda/tenesUnaTienda';

function App() {
  return (
    <div className="App">
      <CartContextrProvider>
        <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route path="/" element={<ItemPortada/>}/>
                
                <Route path="/tienda" element={<ItemListContainer/>}/>
                <Route path="/tienda/:tiendaid" element={<ItemListContainer/>}/>
                <Route path="/cart" element={<CartView/>}/>

                <Route path="/sobreNosotros" element={<SobreNosotros/>}/> 
                <Route path="/Contactanos" element={<ContactUs/>}/> 
                <Route path="/CuidadosYMantenimiento" element={<CuidadosYMantenimiento/>}/>
                <Route path="/PostVenta" element={<PostVenta/>}/>
                <Route path="/TenesUnaTienda" element={<TenesUnaTienda/>}/>

                <Route path="/Producto/:productoid" element={<ItemDetailContainer/>}/>
              </Routes>
            <Footer/>
        </BrowserRouter>
      </CartContextrProvider>
    </div>
  );
}

export default App;