// import axios from 'axios'

const urlAPI = 'http://localhost:3003/api/titulos'

const searchMonthsRequest = () => ({ type: 'SEARCH_MONTH_REQUEST' })

const searchMonthsSucess = (months) => ({ type: 'SEARCH_MONTH_SUCESS', payload: months })

const searchMonthsError = () => ({ type: 'SEARCH_MONTH_ERROR' })

export const searchMonths = (currentMonth) => (dispatch) => {
  dispatch(searchMonthsRequest())
  console.log(currentMonth)

  fetch(`${urlAPI}/separadoMes?month=6-7`)//${currentMonth}`)
    .then(response => {
      if (!response.ok)
        throw new Error()

      return response.json()
    })
    .then(response => dispatch(searchMonthsSucess(response.months)))
    .catch(() => dispatch(searchMonthsError()))
}