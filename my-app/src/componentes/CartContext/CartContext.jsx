import { createContext } from "react";
import { useContext, useState } from "react";


const CartContext = createContext();
const useCartContext = () => useContext(CartContext);
const {Provider} = CartContext;

export function CartContextrProvider ({children}){
    const [cart, setCart] = useState([]);

    const addToCart = (item, cant) =>{
        if (isInCart(item.id)){
            const newCart = cart.map((cartItem)=>{
                if(cartItem.id ===item.id){
                    const copyItem={...cartItem};
                    copyItem.cant += cant;
                    return copyItem;
                }else return cartItem;
            });
            setCart(newCart);
        }else{
        setCart([...cart,{...item, cant}]
            )
        }
    }

    const removeFromCart = (id) => {
        const newCart = [...cart];
        const cartFilter = newCart.filter(item =>{
            return item.id !== id;
        })
        setCart(cartFilter);
    }

    const clearCart=()=>{
        setCart([])
    }

    const isInCart =(id) =>{
        return cart.some(itemCart => itemCart.id === id)
        };

    const contextFunction = () => console.log("contexto listo!");

    const cantInCart =() =>{
        let cant = 0
            cart.forEach((itemCart) => cant += itemCart.cant)
            return cant
    }
    
    const calcPriceCart =()=>{
        let total = 0
        cart.forEach((itemCart) => total += (itemCart.cant*itemCart.price))
        return total
    }

    return(
        <Provider value= 
        {{ contextFunction,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,
        cantInCart,
        calcPriceCart
        
        }}>
            {children}

        </Provider>
    )


}

export default useCartContext


//clase 10 min 31


