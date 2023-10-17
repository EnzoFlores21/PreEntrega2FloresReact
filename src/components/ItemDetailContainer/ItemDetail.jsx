import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext';
import ItemCount from './Counter/ItemCount';
import { Link } from 'react-router-dom';


const ItemDetail = ({ product }) => {

    const [isCounter, setIsCounter] = useState(true)
    const { addProduct } = useCartContext()

    const onAdd = (quantity) => {
        addProduct({ ...product, quantity })
        setIsCounter(false)
    }

    return (
        <div className="card w-25">
            <h2 className='text-center'>Detalle</h2>
            <div className="card-body">
                <img className="w-100 card-img-top" src={product.imageUrl} alt="imagen" />
                <p>Nombre: {product.name}</p>
                <p>Description: {product.description}</p>
                <p>Precio: {product.price}</p>
                <p>Stock: {product.stock}</p>
            </div>
            <div className='row'>
                {
                    isCounter ?
                        <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                        :
                        <>
                            <Link to={'/Cart'}>
                                <button>Ir a Cart</button>
                            </Link>
                            <Link to={'/'}>
                                <button>Ir a Inicio</button>
                            </Link>
                        </>

                }

            </div>
        </div>
    )
}

export default ItemDetail