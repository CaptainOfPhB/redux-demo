export interface Action<T = string, P = unknown> {
  type: T;
  payload: P;
}

const createAction = <T, P>(type: T, payload: P): Action<T, P> => ({ type, payload });

export const PLUS = 'PLUS';
export const MINUS = 'MINUS';

export const plusAction = (payload: number) => createAction(PLUS, payload);
export const minusAction = (payload: number) => createAction(MINUS, payload);
