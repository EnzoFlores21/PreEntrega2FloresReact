import React from 'react'
import ItemCount from './Counter/ItemCount';

const ItemDetail = ({ product }) => {
    
    const onAdd = (count) => {
        console.log("Productos seleccionados", count)
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
                <ItemCount initial={1} stock={4} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail