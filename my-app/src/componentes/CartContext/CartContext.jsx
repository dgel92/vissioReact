import { createContext } from "react";
import { useContext, useState } from "react";


const CartContext = createContext();
const useCartContext = () => useContext(CartContext);
const {Provider} = CartContext;

export function CartContextrProvider ({children}){
    const [cart, setCart] = useState([]);

    const addToCart = (item, cant) =>{
        setCart([...cart,{...item, cant}]
            )

    }
    const contextFunction = () => console.log("contexto listo!");
    return(
        <Provider value= {{ contextFunction, cart, addToCart }}>
            {children}

        </Provider>
    )


}

export default useCartContext


//clase 10 min 31