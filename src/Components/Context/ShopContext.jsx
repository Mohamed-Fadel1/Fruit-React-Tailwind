import { createContext, useEffect, useState } from "react";
import { menuFruit } from "../Menu/MenuData";

export const ShopContext = createContext();


const getCartDefault = () => {
    const storeFruit = localStorage.getItem("cartItem");

    if (storeFruit) {
        return JSON.parse(storeFruit); 
    }

    
    let cart = {};
    menuFruit.forEach((fruit) => {
        cart[fruit.id] = 0;
    });
    return cart;
};

export default function ShopContextProvider(props) {
    const [cart, setCart] = useState(getCartDefault());

    
    useEffect(() => {
        localStorage.setItem("cartItem", JSON.stringify(cart)); 
    }, [cart]);

    const addCart = (itemId) => {
        setCart((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1, 
        }));
    };

    const removeCart = (itemId) => {
        setCart((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1, 
        }));
    };

    const getTotalItems = ()=>{
        return Object.values(cart).reduce((acc , ele)=> acc + ele , 0)
    }

    const clearCart = ()=>{
        let emptyCart = {}

        menuFruit.forEach(fruit => {
            emptyCart[fruit.id] = 0
        });

        setCart(emptyCart)
    }

    return (
        <ShopContext.Provider value={{ cart, setCart, addCart, removeCart ,getTotalItems ,clearCart}}>
            {props.children}
        </ShopContext.Provider>
    );
}
