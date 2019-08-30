// export const urlAPI = 'https://financeiro-bao.herokuapp.com/api/titulos'
export const urlAPI = 'http://localhost:3003/api/titulos'


const searchMonthsRequest = () => ({ type: 'SEARCH_MONTH_REQUEST' })
const searchMonthsSucess = (months) => ({ type: 'SEARCH_MONTH_SUCESS', payload: months })
const searchMonthsError = (error) => ({ type: 'SEARCH_MONTH_ERROR', payload: error })
export const searchMonths = (currentMonth) => (dispatch) => {
  dispatch(searchMonthsRequest())

  fetch(`${urlAPI}/separadoMes?month=${currentMonth}`)
    .then(response => {
      if (!response.ok)
        throw new Error()

      return response.json()
    })
    .then(response => dispatch(searchMonthsSucess(response)))
    .catch((error) => dispatch(searchMonthsError(error)))
}

export const showRegistry = (show) => {
  return {
    type: 'SHOW_NEW_REGISTRY',
    payload: show
  }
}

const addRegistryRequest = () => ({ type: 'ADD_REGISTRY_REQUEST' })
const addRegistryError = (error) => ({ type: 'ADD_REGISTRY_ERROR', payload: error })
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
    })
    .then(() => {
      dispatch(showRegistry(false))
      dispatch(searchMonths(registry.dataInsercao.getMonth() + 1))
    })
    .catch((error) => { dispatch(addRegistryError(error)) })
}


export const removeParcela = (parcela_id) => (dispatch) => {

}

const removeTituloRequest = () => ({ type: 'REMOVE_TITULO_REQUEST' })
const removeTituloError = (error) => ({ type: 'REMOVE_TITULO_ERROR', payload: error })
export const removeTitulo = (titulo_id, mesAtual) => (dispatch) => {
  dispatch(removeTituloRequest())

  fetch(urlAPI + "/" + titulo_id, {
    headers: {
      "Content-Type": 'application/json'
    },
    method: 'DELETE'
  })
    .then((response) => {
      if (!response) {
        throw new Error();
      }
    })
    .then(() => {
      dispatch(searchMonths(mesAtual))
    })
    .catch((error) => {
      dispatch(removeTituloError(error))
    })
}