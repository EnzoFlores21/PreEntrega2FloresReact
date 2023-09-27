import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { mFetch } from '../../data/mockFetch'
import ItemDetail from './ItemDetail'



const ItemDetailContainer = () => {
    const [product, SetProduct] = useState({}) 
    const {pid} = useParams()

    useEffect(() => {
        mFetch(Number(pid))
        .then(resp => SetProduct(resp))
        .catch(err => console.log(err))
    },[])
    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer