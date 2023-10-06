
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useCartContext } from "../../context/CartContext"
import { useState } from 'react'
import { Link } from 'react-router-dom'


const CartContainer = () => {
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const [id, setId] = useState('')
    const { cartList, deleteCart, eliminarProducto, precioTotal } = useCartContext()


    const handleAddOrder = async (evt) => {
        evt.preventDefault()
        const order = {}
        order.buyer = dataForm
        order.items = cartList.map(prod => {
            return { id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity }
        })
        order.total = precioTotal()

        const queryDB = getFirestore()
        const ordersCollection = collection(queryDB, 'orders')
        addDoc(ordersCollection, order)
            .then(({ id }) => setId(id))
            .catch(err => console.log(err))
            .finally(() => {
                setDataForm({
                    name: '',
                    phone: '',
                    email: ''
                })
                deleteCart()
            })
    }

    const handleOnChange = (evt) => {
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })
    }
    console.log(dataForm)
    return (
        <>
            {id !== '' && <h3>SE ha generado le orden de compra: {id}</h3>}
            {cartList.length > 0 ?
                <div>
                    {cartList.map(prod => <div key={prod.id}>
                        <img src={prod.imageUrl} className="w-25" />
                        {prod.name} - ${prod.price} - Cantidad: {prod.quantity}
                        <button className="btn btn-danger" onClick={() => eliminarProducto(prod.id)}> X </button>
                    </div>)}
                    <button onClick={deleteCart}>Vaciar Carrito</button>

                    <h3>Precio total: {precioTotal()}</h3>
                    <form className='flex' onSubmit={handleAddOrder}>
                        <input
                            type='text'
                            name='name'
                            placeholder='ingresar el nombre'
                            value={dataForm.name}
                            onChange={handleOnChange}
                        />
                        <input
                            type='text'
                            name='phone'
                            placeholder='ingresar el teléfono'
                            value={dataForm.phone}
                            onChange={handleOnChange}
                        />
                        <input
                            type='text'
                            name='email'
                            placeholder='ingresar el email'
                            value={dataForm.email}
                            onChange={handleOnChange}
                        />
                        <button className="btn btn-success">
                            Terminar compra
                        </button>

                    </form>

                </div>
                :
                <div>
                    <h2>No hay productos en el carrito</h2>
                    <Link to='/'>Ir a inicio</Link>
                </div>}
        </>
    )
}

export default CartContainer