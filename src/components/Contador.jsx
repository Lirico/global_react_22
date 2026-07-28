import { useState } from "react"


const initialState = 0;

const Contador = () => {
    const [contador, setContador] = useState(initialState)

    const decrementar = () => setContador((prev) => prev - 1)
    const resetear = () => setContador(initialState)
    const incrementar = () => setContador((prev) => prev + 1) 

  return (
    <>
        <h3>{contador}</h3>
        <div>
            <button onClick={decrementar}>-</button>
            <button onClick={resetear}>0</button>
            <button onClick={incrementar}>+</button>
        </div>
    </>
  )
}

export default Contador