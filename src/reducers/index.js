const initialState = {
  months: [],
  newRegistry: false,
  idTitulo: null
}

const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_MONTH_SUCESS':
      return {
        ...state,
        months: action.payload
      }
    case 'SHOW_NEW_REGISTRY':
      return {
        ...state,
        newRegistry: action.payload
      }
    case 'SHOW_QUESTION':
      return {
        ...state,
        idTitulo: action.payload
      }
    case 'SEARCH_MONTH_REQUEST':
    case 'SEARCH_MONTH_ERROR':
    case 'ADD_REGISTRY_REQUEST':
    case 'ADD_REGISTRY_ERROR':
    case 'REMOVE_TITULO_REQUEST':
    case 'REMOVE_TITULO_ERROR':
    case 'PAYED_REQUEST':
    case 'PAYED_ERROR':
      return {
        ...state
      }
    case 'PAYED_SUCESS':
      return {
        ...state,
        pago: action.payload
      }
    default: return state
  }
}

export default rootReducers