import { useState } from "react"

const useCounter = (min, max) => {
    const [count, setCount] = useState(min)

    const handleAdd = () => {
        if(count < max) {
            setCount(count + 1)
        }
    }

    const handleSubtract = () => {
        if(count > min) {
            setCount(count - 1)
        }
    }

    return {
        count,
        handleAdd,
        handleSubtract
    }
}


const ItemCount = ({initial, stock, onAdd}) => { 

    const { count, handleAdd, handleSubtract } = useCounter(initial, stock)
    
    return (
        <center>
            <div>
                <button onClick={handleAdd}> + 1 </button>    
                <label>
                    <strong>{ count }</strong>
                </label>
                <button onClick={handleSubtract}> - 1 </button>    
                <button onClick={() => onAdd(count)}>Agregar al Carrito</button>    
            </div>
        </center>
    )
} 

export default ItemCount