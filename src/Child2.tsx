import React from 'react';
import { useSelector } from 'react-redux';

import { Store } from './store';

function Child2() {
  const count = useSelector<Store, number>(s => s.count);

  return (
    <div className='child2'>
      <p>Child2</p>
      <code>{count}</code>
    </div>
  );
}

export default Child2;
