import { MINUS, PLUS, Action } from './action';

const counterReducer = (state = { count: 0 }, action: Action<string, number>) => {
  switch (action.type) {
    case PLUS:
      return { count: state.count + action.payload };
    case MINUS:
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

export default counterReducer;