const initialState = {
  months: []
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
      return {
        ...state
      }
    default: return state
  }
}

export default rootReducers