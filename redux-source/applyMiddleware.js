import compose from './compose';

export default function applyMiddleware(...middlewares) {
  return (createStore) => (...args) => {
    const store = createStore(...args);
    let dispatch = () => {
      throw new Error(
        'Dispatching while constructing your middleware is not allowed. ' +
        'Other middleware would not be applied to this dispatch.',
      );
    };

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args),
    };
    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);

    return {
      ...store,
      dispatch,
    };
  };
}

/* ================================================================== */

function foo() {
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

/*
  const composed = (...arg) => foo(bar(...arg));

  const _dispatch = composed(store.dispatch);

                  = ( (...arg) => foo(bar(...arg)) )(store.dispatch)

                  = foo(bar(dispatch));

                  = action => {
                      console.log('foo');
                      return bar(dispatch)(action);
                    }

                  = action => {
                      console.log('foo');
                      return (action1 => {
                        console.log('bar');
                        return dispatch(action1);
                      })(action);
                    }

                  = action => {
                      console.log('foo');
                      console.log('bar');
                      return dispatch(action);
                    }
*/
