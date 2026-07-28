/* 
    Un estado seria el valor actual de una variable la cual puede ser
    modificada (reeestablecida) cuantas veces queramos.
    Sin embargo, los estados siempre tienen la tendencia a regresar
    al valor inicial que se les fue declarado.

    Para poder manipular estados vamos a necesitar de una funcion nativa
    de React. Esta funcion pertenece al conjunto de funciones nativas
    conocidas como Hooks.

    En este caso la que nos interesa es una funcion llamada useState().

    De todas los existentes nosotros vamos a ver los 4 mas importantes:
    - useState
    - useEffect
    - useContext
    - useReducer

    Queda para investigar por tu cuenta:
    - useMemo
    - useCallback
    - useRef
    - useParams
*/
import { useState } from "react"


const Estado = () => {
    // Suponete que nosotros tenemos que manipular los cambios de color del
    // cabello de Goku. Siendo el estado inicial el color negro.
    const [cabello, setCabello] = useState("Morocho")

  return (
    <>
        <h2>{cabello}</h2>
        <div>
            <button onClick={() => setCabello("Rubio")}>SSJ</button>
            <button onClick={() => setCabello("Rubio con rashitos")}>SSJ 2</button>
            <button onClick={() => setCabello("Rubio con rashitos y melena")}>SSJ 3</button>
        </div>
    </>
  )
}

export default Estado