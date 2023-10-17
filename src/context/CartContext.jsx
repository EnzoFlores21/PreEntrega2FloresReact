import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addProduct = (newProduct)=>{
        
    const idx = cartList.findIndex(product => product.id == newProduct.id) 

        if (idx !== -1) {
            cartList[idx].quantity += newProduct.quantity 
            setCartList([...cartList]) 
        } else {
            setCartList([
                ...cartList,
                newProduct
            ])            
        }
    }


    const eliminarProducto = (pid) => setCartList(cartList.filter(prod => prod.id !== pid))

    const cantidadTotal = ()=> cartList.reduce((count, objProduct)=> count += objProduct.quantity, 0)

    const precioTotal = () => cartList.reduce((count, objProduct)=> count += (objProduct.quantity * objProduct.price), 0)

    const deleteCart = ()=>{
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addProduct,
            deleteCart,
            cantidadTotal,
            precioTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )

}

