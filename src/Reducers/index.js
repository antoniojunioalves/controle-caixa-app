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
    case 'SEARCH_MONTH_REQUEST':
    case 'SEARCH_MONTH_ERROR':
    case 'ADD_REGISTRY_REQUEST':
    case 'ADD_REGISTRY_ERROR':
      return {
        ...state
      }
    case 'SHOW_NEW_REGISTRY':
      return {
        ...state,
        showNewRegistry: action.payload
      }
    default: return state
  }
}

export default rootReducers