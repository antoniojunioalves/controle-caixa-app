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