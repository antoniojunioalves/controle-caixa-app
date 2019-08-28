export const urlAPI = 'https://financeiro-bao.herokuapp.com/api/titulos'

const searchMonthsRequest = () => ({ type: 'SEARCH_MONTH_REQUEST' })
const searchMonthsSucess = (months) => ({ type: 'SEARCH_MONTH_SUCESS', payload: months })
const searchMonthsError = () => ({ type: 'SEARCH_MONTH_ERROR' })
export const searchMonths = (currentMonth) => (dispatch) => {
  dispatch(searchMonthsRequest())

  fetch(`${urlAPI}/separadoMes?month=${currentMonth}`)
    .then(response => {
      if (!response.ok)
        throw new Error()

      return response.json()
    })
    .then(response => dispatch(searchMonthsSucess(response)))
    .catch(() => dispatch(searchMonthsError()))
}

export const showRegistry = (show) => {
  return {
    type: 'SHOW_NEW_REGISTRY',
    payload: show
  }
}

const addRegistryRequest = () => ({ type: 'ADD_REGISTRY_REQUEST' })
const addRegistryError = () => ({ type: 'ADD_REGISTRY_ERROR' })
export const addRegistry = (registry) => (dispatch) => {
  dispatch(addRegistryRequest())

  fetch(urlAPI, {
    headers: {
      "Content-Type": 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(registry)
  })
    .then(response => {
      if (!response.ok)
        throw new Error()

      // return response.json()
    })
    .then(() => {
      dispatch(showRegistry(false))
      dispatch(searchMonths(registry.dataInsercao.getMonth() + 1))
    })
    .catch((error) => { dispatch(addRegistryError(error)) })
}