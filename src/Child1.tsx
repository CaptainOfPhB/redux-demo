import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { AppDispatch } from './store';
import { plusAction, minusAction } from './store/action';

function Child1() {
  const dispatch = useDispatch<AppDispatch>();

  const { minus } = bindActionCreators({ minus: minusAction }, dispatch as Dispatch);

  return (
    <div className='child1'>
      <p>Child1</p>
      <div className='buttons'>
        <button onClick={() => dispatch(plusAction(1))}>+ 1</button>
        <button onClick={() => minus(1)}>- 1</button>
      </div>
    </div>
  );
}

export default Child1;
