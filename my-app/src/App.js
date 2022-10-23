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
import EnviosYDevoluciones from './componentes/pedidosEnviosYDevoluciones/PedidosEnviosYDevoluciones';
import AvisoLegal from './componentes/AvisosLegales/AvisosLegales';
import Privacidad from './componentes/privacidad/Privacidad';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Checkout from './componentes/checkOut/CheckOut';

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
                <Route path="/EnviosPedidosYDevoluciones" element={<EnviosYDevoluciones/>}/>
                <Route path="/AvisosLegales" element={<AvisoLegal/>}/>
                <Route path="/PrivacidadYCookies" element={<Privacidad/>}/>

                <Route path="/Producto/:productoid" element={<ItemDetailContainer/>}/>
                <Route path="/Checkout" element={<Checkout/>}/>
              
              </Routes>
            <Footer/>
        </BrowserRouter>
      </CartContextrProvider>
    </div>
  );
}

export default App;