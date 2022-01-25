import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import './comicsList.scss';
import { getAllComics } from '../../redux/actionCreators/asyncActionCreators/comicsAction';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import { Link } from 'react-router-dom';

const ComicsList = () => {
  const dispatch = useDispatch();

  const { results, loading, offset, loadMoreComics, comicsEnded, error } =
    useSelector((state) => ({
      results: state.comics.results,
      loading: state.comics.loading,
      offset: state.comics.offset,
      loadMoreComics: state.comics.loadMoreComics,
      comicsEnded: state.comics.comicsEnded,
      error: state.comics.error,
    }));

  useEffect(() => {
    if (!results.length) dispatch(getAllComics());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Spinner />;
  if (error) return <Error />;

  const comicsItems = results.map(({ id, title, prices, thumbnail }, i) => (
    <li key={`${id}_${i}`} className='comics__item'>
      <Link to={`/comics/${id}`}>
        <img
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={title}
          className='comics__item-img'
        />
        <div className='comics__item-name'>{title}</div>
        <div className='comics__item-price'>{prices[0].price + '$'}</div>
      </Link>
    </li>
  ));

  return (
    <div className='comics__list'>
      <ul className='comics__grid'>{comicsItems}</ul>
      {!comicsEnded && (
        <button
          disabled={loadMoreComics}
          onClick={() => dispatch(getAllComics(offset + 8))}
          className='button button__main button__long'
        >
          <div className='inner'>load more</div>
        </button>
      )}
    </div>
  );
};

export default ComicsList;
