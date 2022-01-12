import React from 'react';

import Spinner from '../../../spinner/Spinner';
import Error from '../../../error/Error';

const RandomCharBlock = ({ randomChar }) => {
  const {
    loading,
    name,
    hasError,
    description,
    thumbnail: { path, extension },
    urls,
  } = randomChar;

  if (hasError) return <Error />;
  if (loading) return <Spinner />;

  return (
    <div className='randomchar__block'>
      <img
        src={`${path}.${extension}`}
        alt='Random character'
        className='randomchar__img'
      />
      <div className='randomchar__info'>
        <p className='randomchar__name'>{name}</p>
        <p className='randomchar__descr'>
          {description || 'Description is empty'}
        </p>
        <div className='randomchar__btns'>
          <a href={urls[0]?.url || ''} className='button button__main'>
            <div className='inner'>homepage</div>
          </a>
          <a href={urls[1]?.url || ''} className='button button__secondary'>
            <div className='inner'>Wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RandomCharBlock;
