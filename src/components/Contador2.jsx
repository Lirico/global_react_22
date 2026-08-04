import { useReducer } from "react"
import TYPES  from "../reducer_contador/actions.js"
import initialState from "../reducer_contador/initialState.js"
import reducer from "../reducer_contador/reducer.js"

const Contador2 = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const decrementar = (id) => dispatch({ type: TYPES.DECREMENTAR, payload: 1 }); // type / payload

  const resetear = () => dispatch({ type: TYPES.RESETEAR });

  const incrementar = () => dispatch({ type: TYPES.INCREMENTAR, payload: 1 });

  const alternarVisibilidad = () => dispatch({ type: TYPES.ALTENERAR_VISIBILIDAD });

  return (
    <>
      <h2>Contador con Hooks</h2>
      {
        state.isVisible && <h3>{state.contador}</h3>
      }
      <div>
        <button onClick={decrementar}>-</button>
        <button onClick={resetear}>0</button>
        <button onClick={incrementar}>+</button>
        <button onClick={alternarVisibilidad}>Mostrar/Ocultar</button>
      </div>
    </>
  )
}

export default Contador2


