import React, { useEffect, useState } from 'react'

import { mFetch } from '../../data/mockFetch'
import ItemList from './ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    const [products, SetProduct] = useState([])
    const [loading, SetLoading] = useState(true)
    const {cid} = useParams()
    
    useEffect(() => {
        if (cid) {
            mFetch()
            .then(respuesta => SetProduct(respuesta.filter(product => cid == product.category)))
            .catch(err => console.log(err))
            .finally(() => SetLoading(false))
        } else {
            mFetch()
            .then(respuesta => SetProduct(respuesta))
            .catch(err => console.log(err))
            .finally(() => SetLoading(false))
        }
    }, [cid])

    console.log(products);
    return (
        <div>
            <div className="row">
            { loading ? 
                <h2>Loading ...</h2> 
            : 
                <ItemList products={products} />
            }
            </div>
        </div>
    )
}

export default ItemListContainer