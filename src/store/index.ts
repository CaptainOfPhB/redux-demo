import reducers from './reducer';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  reducers,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware(foo, bar),
);

export default store;

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// @ts-ignore
function foo({ dispatch }) {
  // dispatch();
  // @ts-ignore
  return next => action => {
    console.log('foo');
    return next(action);
  };
}

function bar() {
  // @ts-ignore
  return next1 => action1 => {
    console.log('bar');
    return next1(action1);
  };
}
