import { AnyAction } from 'redux';

import { RootState } from '../types';

const initialState: RootState = {
  months: [],
  newRegistry: false,
  idTitulo: null,
};

const rootReducers = (state = initialState, action: AnyAction): RootState => {
  switch (action.type) {
    case 'SEARCH_MONTH_SUCESS':
      return {
        ...state,
        months: action.payload,
      };
    case 'SHOW_NEW_REGISTRY':
      return {
        ...state,
        newRegistry: action.payload,
      };
    case 'SHOW_QUESTION':
      return {
        ...state,
        idTitulo: action.payload,
      };
    case 'PAYED_SUCESS':
      return {
        ...state,
        pago: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducers;
