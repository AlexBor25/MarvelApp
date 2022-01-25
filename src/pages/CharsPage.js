import React from 'react';

import RandomChar from '../components/randomChar/RandomChar';
import CharList from '../components/charList/CharList';
import CharInfo from '../components/charInfo/CharInfo';

import decoration from '../resources/img/vision.png';

const CharsPage = () => {
  return (
    <>
      <RandomChar />
      <div className='char__content'>
        <CharList />
        <CharInfo />
      </div>
      <img className='bg-decoration' src={decoration} alt='vision' />
    </>
  );
};

export default CharsPage;
