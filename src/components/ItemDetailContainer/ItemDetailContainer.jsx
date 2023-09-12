import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from './ItemDetail'
import { mFetch } from '../../data/mockFetch'


const ItemDetailContainer = () => {
    const [product, SetProduct] = useState({}) 
    const [loading, SetLoading] = useState(true)
    const {pid} = useParams()

    useEffect(() => {
        mFetch(Number(pid))
        .then(resp => SetProduct(resp))
        .catch(err => console.log(err))
        .finally(() => SetLoading(false))
    },[])
    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer