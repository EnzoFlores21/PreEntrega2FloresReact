import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
    return (
        <div key={product.id} className="card w-25">
            <div className="card-body">
                <img className="w-100 card-img-top" src={product.imageUrl} alt="imagen prenda" />
                <p className='card-text'>Description: {product.description}</p>
                <p className='card-text'>Precio: {product.price}</p>
            </div>
            <div className="card-footer">
                <Link to={`/detalle/${product.id}`}>
                    <button className="btn btn-outline-dark w-100">Detalle</button>
                </Link>
            </div>
        </div>
    )
}

export default Item