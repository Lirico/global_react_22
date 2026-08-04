import TYPES from "./actions.js"

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.DECREMENTAR: {

      return {
        ...state,
        contador: state.contador - action.payload
      }
    }
    case TYPES.RESETEAR: {
      return {
        ...state,
        contador: 0
      }
    }
    case TYPES.INCREMENTAR: {
      return {
        ...state,
        contador: state.contador + action.payload
      }
    }
    case TYPES.ALTENERAR_VISIBILIDAD: {
      return {
        ...state,
        isVisible: !state.isVisible
      }
    }
  }
}

export default reducer;