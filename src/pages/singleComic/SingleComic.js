import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './singleComic.scss';
import Spinner from '../../components/spinner/Spinner';
import Error from '../../components/error/Error';
import { getSingleComic } from '../../redux/actionCreators/asyncActionCreators/comicsAction';

const SingleComic = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { singleComic } = useSelector((state) => ({
    singleComic: state.comics.singleComic,
  }));

  const {
    loading,
    hasError,
    prices,
    description,
    pageCount,
    title,
    thumbnail,
    language,
  } = singleComic;

  console.log(singleComic);

  useEffect(() => {
    dispatch(getSingleComic(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Spinner />;
  if (hasError) return <Error />;

  return (
    <div className='single-comic'>
      <img
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={title}
        className='single-comic__img'
      />
      <div className='single-comic__info'>
        <h2 className='single-comic__name'>{title}</h2>
        <p className='single-comic__descr'>
          {description || 'Description is Empty :('}
        </p>
        <p className='single-comic__descr'>{pageCount} pages</p>
        <p className='single-comic__descr'>Language: {language || 'en'}</p>
        <div className='single-comic__price'>{prices[0]?.price}$</div>
      </div>
      <Link to={'/comics'} className='single-comic__back'>
        Back to all
      </Link>
    </div>
  );
};

export default SingleComic;
