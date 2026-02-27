import { NewRegistryPayload, MonthData, AppThunk } from '../types';

// export const urlAPI = 'https://financeiro-bao.herokuapp.com/api/titulos'
export const urlAPI = 'http://localhost:3003/api/titulos';

const searchMonthsRequest = () => ({ type: 'SEARCH_MONTH_REQUEST' } as const);
const searchMonthsSucess = (months: MonthData[]) => ({
  type: 'SEARCH_MONTH_SUCESS',
  payload: months,
} as const);
const searchMonthsError = (error: unknown) => ({ type: 'SEARCH_MONTH_ERROR', payload: error } as const);

export const searchMonths = (currentMonth: number): AppThunk<Promise<void>> => async (dispatch) => {
  dispatch(searchMonthsRequest());

  try {
    const response = await fetch(`${urlAPI}/separadoMes?month=${currentMonth}`);
    if (!response.ok) {
      throw new Error('Falha ao buscar os meses');
    }

    const months = (await response.json()) as MonthData[];
    dispatch(searchMonthsSucess(months));
  } catch (error) {
    dispatch(searchMonthsError(error));
  }
};

const addRegistryRequest = () => ({ type: 'ADD_REGISTRY_REQUEST' } as const);
const addRegistryError = (error: unknown) => ({ type: 'ADD_REGISTRY_ERROR', payload: error } as const);

export const addRegistry = (registry: NewRegistryPayload): AppThunk<Promise<void>> => async (dispatch) => {
  dispatch(addRegistryRequest());

  try {
    const response = await fetch(urlAPI, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(registry),
    });

    if (!response.ok) {
      throw new Error('Falha ao incluir lançamento');
    }

    dispatch(showRegistry(false));
    dispatch(searchMonths(registry.dataInsercao.getMonth() + 1));
  } catch (error) {
    dispatch(addRegistryError(error));
  }
};

const removeTituloRequest = () => ({ type: 'REMOVE_TITULO_REQUEST' } as const);
const removeTituloError = (error: unknown) => ({ type: 'REMOVE_TITULO_ERROR', payload: error } as const);

export const removeTitulo = (titulo_id: number, currentMonth: number): AppThunk<Promise<void>> => async (dispatch) => {
  dispatch(removeTituloRequest());

  try {
    const response = await fetch(`${urlAPI}/${titulo_id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Falha ao excluir lançamento');
    }

    dispatch(searchMonths(currentMonth));
  } catch (error) {
    dispatch(removeTituloError(error));
  }
};

const payedRequest = () => ({ type: 'PAYED_REQUEST' } as const);
const payedError = (error: unknown) => ({ type: 'PAYED_ERROR', payload: error } as const);

export const payed = (
  pay: boolean,
  idTitulo: number,
  idParcela: number,
  currentMonth: number,
): AppThunk<Promise<void>> => async (dispatch) => {
  dispatch(payedRequest());

  try {
    const response = await fetch(`${urlAPI}/payed?pay=${pay}&idTitulo=${idTitulo}&idParcela=${idParcela}`);

    if (!response.ok) {
      throw new Error('Falha ao atualizar pagamento');
    }

    dispatch(searchMonths(currentMonth));
  } catch (error) {
    dispatch(payedError(error));
  }
};

export const showRegistry = (show: boolean) => ({ type: 'SHOW_NEW_REGISTRY', payload: show } as const);
export const showQuestion = (idTitulo: number | null) => ({ type: 'SHOW_QUESTION', payload: idTitulo } as const);
