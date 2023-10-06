import React from 'react'
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {
    const {cantidadTotal} = useCartContext()
    return (
        <div>
            {cantidadTotal()}
            🛒
        </div>
    )
}

export default CartWidget