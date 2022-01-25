import React from 'react';

import notFound from '../../resources/img/notFound.png';
import './notFound.scss';

const NotFound = () => {
  return (
    <div className='notFound'>
      <img src={notFound} alt='not-found' />
    </div>
  );
};

export default NotFound;
