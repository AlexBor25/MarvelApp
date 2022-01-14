import { useSelector } from 'react-redux';

import './charInfo.scss';
import Error from '../error/Error';
import Spinner from '../spinner/Spinner';
import Skeleton from '../skeleton/Skeleton';

const CharInfo = () => {
  const { selectedChar } = useSelector((state) => ({
    selectedChar: state.characters.selectedChar,
  }));

  const {
    loading,
    name,
    hasError,
    description,
    comics,
    thumbnail: { path, extension },
    urls,
  } = selectedChar;

  if (hasError) return <Error />;
  if (loading) return <Spinner />;

  const comicsItems = comics.items.slice(0, 10).map(({ name }) => (
    <li key={name} className='char__comics-item'>
      {name}
    </li>
  ));

  const comicsInfo = !comics.items.length ? 'Empty' : comicsItems;

  return (
    <div className='char__info'>
      {!name ? (
        <Skeleton />
      ) : (
        <>
          <div className='char__basics'>
            <img src={`${path}.${extension}`} alt={name} />
            <div>
              <div className='char__info-name'>{name}</div>
              <div className='char__btns'>
                <a href={urls[0]?.url} className='button button__main'>
                  <div className='inner'>homepage</div>
                </a>
                <a href={urls[1]?.url} className='button button__secondary'>
                  <div className='inner'>Wiki</div>
                </a>
              </div>
            </div>
          </div>
          <div className='char__descr'>
            {description || 'Description is empty'}
          </div>
          <div className='char__comics'>Comics:</div>
          <ul className='char__comics-list'>{comicsInfo}</ul>
        </>
      )}
    </div>
  );
};

export default CharInfo;
