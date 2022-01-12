import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getAllCharacters } from '../../redux/actionCreators/asyncActionCreator';

import './charList.scss';
import Spinner from '../spinner/Spinner';

const CharList = () => {
  const dispatch = useDispatch();

  const { loading, results } = useSelector((state) => ({
    loading: state.characters.loading,
    results: state.characters.results,
  }));

  useEffect(() => {
    dispatch(getAllCharacters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const charsItems = results.map(({ name, id, thumbnail }) => {
    const { path, extension } = thumbnail;
    return (
      <li key={id} className='char__item char__item_selected'>
        <img src={`${path}.${extension}`} alt={name} />
        <div className='char__name'>{name}</div>
      </li>
    );
  });

  if (loading) return <Spinner />;

  return (
    <div className='char__list'>
      <ul className='char__grid'>{charsItems}</ul>
      <button className='button button__main button__long'>
        <div className='inner'>load more</div>
      </button>
    </div>
  );
};

export default CharList;
