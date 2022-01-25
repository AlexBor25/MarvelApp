import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  addChars,
  getAllCharacters,
  getChar,
} from '../../redux/actionCreators/asyncActionCreators/charAction';

import './charList.scss';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

const CharList = () => {
  const dispatch = useDispatch();

  const { loading, results, offset, newCharsLoading, charsEnded, activeChar } =
    useSelector((state) => ({
      loading: state.characters.loading,
      results: state.characters.results,
      offset: state.characters.offset,
      newCharsLoading: state.characters.newCharsLoading,
      charsEnded: state.characters.charsEnded,
      activeChar: state.characters.activeChar,
    }));

  useEffect(() => {
    dispatch(getAllCharacters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const charsItems = results.map(({ name, id, thumbnail }) => {
    let activeClass = 'char__item char__item';

    if (activeChar === name) {
      activeClass += '_selected';
    }

    const { path, extension } = thumbnail;

    return (
      <li
        onClick={() => dispatch(getChar(id))}
        key={id}
        tabIndex={0}
        className={activeClass}
      >
        <img src={`${path}.${extension}`} alt={name} />
        <div className='char__name'>{name}</div>
      </li>
    );
  });

  if (loading) return <Spinner />;

  return (
    <div className='char__list'>
      <ul className='char__grid'>{!results.length ? <Error /> : charsItems}</ul>
      {!charsEnded && (
        <button
          disabled={newCharsLoading}
          onClick={() => dispatch(addChars(offset + 9))}
          className='button button__main button__long'
        >
          <div className='inner'>load more</div>
        </button>
      )}
    </div>
  );
};

export default CharList;
