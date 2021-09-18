import reducers from './reducer';
import { createStore } from 'redux';

const store = createStore(
  reducers,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

export type Store = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
