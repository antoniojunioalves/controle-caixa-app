export const urlAPI = 'https://financeiro-bao.herokuapp.com/api/titulos'

const searchMonthsRequest = () => ({ type: 'SEARCH_MONTH_REQUEST' })
const searchMonthsSucess = (months) => ({ type: 'SEARCH_MONTH_SUCESS', payload: months })
const searchMonthsError = () => ({ type: 'SEARCH_MONTH_ERROR' })
export const searchMonths = (currentMonth) => (dispatch) => {
  dispatch(searchMonthsRequest())
  console.log('entrou no search')
  fetch(`${urlAPI}/separadoMes?month=${currentMonth}`)
    .then(response => {
      if (!response.ok)
        throw new Error()

      return response.json()
    })
    .then(response => dispatch(searchMonthsSucess(response)))
    .catch(() => dispatch(searchMonthsError()))
}

export const updateShowNewRegistry = (showNewRegistry) => {
  return {
    type: 'SHOW_NEW_REGISTRY',
    payload: showNewRegistry
  }
}

const insertNewRegistryRequest = () => ({ type: 'INSERT_NEW_REGISTRY_REQUEST' })
const insertNewRegistryError = () => ({ type: 'INSERT_NEW_REGISTRY_ERROR' })
export const insertNewRegistry = (newRegistro) => (dispatch) => {
  dispatch(insertNewRegistryRequest())

  fetch(urlAPI, {
    headers: {
      "Content-Type": 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(newRegistro)
  })
    .then(response => {
      if (!response.ok)
        throw new Error()

      // return response.json()
    })
    .then(() => {
      dispatch(updateShowNewRegistry(false))
      dispatch(searchMonths(newRegistro.dataInsercao.getMonth() + 1))
    })
    .catch((error) => { dispatch(insertNewRegistryError(error)) })
}