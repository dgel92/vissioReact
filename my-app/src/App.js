import './App.css';
import Footer from './componentes/Footer/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import NavBar from './componentes/navBar/NavBar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemPortada from './componentes/Portada';
import { CartContextrProvider } from './componentes/CartContext/CartContext';
import CartView from './componentes/CartView/CartView';
import {ContactUs} from './contactanos/Contactanos';
import EnviosYDevoluciones from './componentes/pedidosEnviosYDevoluciones/PedidosEnviosYDevoluciones';
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
                <Route path="/Contactanos" element={<ContactUs/>}/> 
                <Route path="/EnviosPedidosYDevoluciones" element={<EnviosYDevoluciones/>}/>

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