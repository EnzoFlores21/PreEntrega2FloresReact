import React, { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'



const ItemDetailContainer = () => {
    const [product, setProduct] = useState({}) 
    const {pid} = useParams()
    console.log(pid);

    useEffect(()=>{
        const db = getFirestore()
        const queryDoc = doc(db, 'products', pid) // id useParams
        getDoc(queryDoc)
        .then(resp => ( { id: resp.id, ...resp.data() } ) )
        .then(resp => setProduct(resp))
    }, [])

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer