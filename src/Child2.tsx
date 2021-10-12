import React from 'react';
import { useSelector } from 'react-redux';

import { RootStore } from './store';

function Child2() {
  const count = useSelector<RootStore, number>(s => s.count);

  return (
    <div className='child2'>
      <p>Child2</p>
      <code>{count}</code>
    </div>
  );
}

export default Child2;
