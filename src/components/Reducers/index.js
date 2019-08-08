const initialState = {
  months: []
}

const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_MONTH_SUCESS':
      console.log(action.payload)
      return {
        ...state,
        months: action.payload
      }
    case 'SEARCH_MONTH_REQUEST', 'SEARCH_MONTH_ERROR':
      return {
        ...state
      }
  }
}

export default rootReducers