import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './randomChar.scss';
import { getRandomChar } from '../../redux/actionCreators/asyncActionCreator';
import mjolnir from '../../resources/img/mjolnir.png';
import { getRandomId } from '../../utils/getRandomId';
import RandomCharBlock from './components/RandomCharBlock/RandomCharBlock';

const RandomChar = () => {
  const dispatch = useDispatch();
  const { randomChar } = useSelector((state) => ({
    randomChar: state.characters.randomChar,
  }));

  const id = getRandomId();

  useEffect(() => {
    dispatch(getRandomChar(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='randomchar'>
      <RandomCharBlock randomChar={randomChar} />
      <div className='randomchar__static'>
        <p className='randomchar__title'>
          Random character for today!
          <br />
          Do you want to get to know him better?
        </p>
        <p className='randomchar__title'>Or choose another one</p>
        <button
          onClick={() => dispatch(getRandomChar(id))}
          className='button button__main'
        >
          <div className='inner'>try it</div>
        </button>
        <img src={mjolnir} alt='mjolnir' className='randomchar__decoration' />
      </div>
    </div>
  );
};

export default RandomChar;
