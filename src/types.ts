import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

export type TipoLancamento = 'C' | 'D';

export interface Parcela {
  tipoLancamento: TipoLancamento;
  descricao: string;
  valor: number;
  titulo_id: number;
  parcela_id: number;
  pago: boolean;
  qtdTotalParcelas: number;
  nroParcela: number;
}

export interface MonthData {
  totalCredito: number;
  totalDebito: number;
  mes: string;
  parcelas: Parcela[];
}

export interface RootState {
  months: MonthData[];
  newRegistry: boolean;
  idTitulo: number | null;
  pago?: boolean;
}

export interface NewRegistryParcela {
  nroParcela: number;
  mes: number;
  ano: number;
  valor: number;
  pago: boolean;
}

export interface NewRegistryPayload {
  descricao: string;
  tipoLancamento: TipoLancamento;
  dataInsercao: Date;
  parcelas: NewRegistryParcela[];
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
