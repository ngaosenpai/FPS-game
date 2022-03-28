import React from 'react';
import './Empty.scss'

import { EmptyProps } from './types'

function Empty({ children } : EmptyProps) {
  return (
    <div className='empty'>
      { children }
    </div>
  );
}

export default Empty;