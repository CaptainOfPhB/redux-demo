export default function combineReducers(reducers) {
  const reducerKeys = {};

  Object.keys(reducers).forEach(key => {
    if (typeof reducers[key] === 'function') {
      reducerKeys[key] = reducers[key];
    }
  });

  const finalReducerKeys = Object.keys(reducerKeys);

  return function combination(rootStore = {}, action) {
    let hasChanged = false;
    const nextRootStore = {};

    finalReducerKeys.forEach(key => {
      const reducer = reducerKeys[key];
      const prevStore = rootStore[key];
      const nextStore = reducer(prevStore, action);
      nextRootStore[key] = nextStore;
      hasChanged = hasChanged || nextStore !== prevStore;
    });

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(rootStore).length;

    return hasChanged ? nextRootStore : rootStore;
  };
}
