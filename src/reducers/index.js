const initialState = {
  months: [],
  showNewRegistry: false
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
        showNewRegistry: action.payload
      }
    case 'SEARCH_MONTH_REQUEST':
    case 'SEARCH_MONTH_ERROR':
    case 'ADD_REGISTRY_REQUEST':
    case 'ADD_REGISTRY_ERROR':
    case 'REMOVE_TITULO_REQUEST':
    case 'REMOVE_TITULO_ERROR':
      return {
        ...state
      }
    default: return state
  }
}

export default rootReducers