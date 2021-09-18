import React from 'react';
import { useDispatch } from 'react-redux';

import { Dispatch } from './store';
import { plus, minus } from './store/action';

function Child1() {
  const dispatch = useDispatch<Dispatch>();

  return (
    <div className='child1'>
      <p>Child1</p>
      <div className='buttons'>
        <button onClick={() => dispatch(plus(1))}>+ 1</button>
        <button onClick={() => dispatch(minus(1))}>- 1</button>
      </div>
    </div>
  );
}

export default Child1;
