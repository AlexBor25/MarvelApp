import error from '../../resources/img/error.gif';
import './Error.scss';

const Error = () => {
  return (
    <div className='error'>
      <img src={error} alt='error' />
    </div>
  );
};

export default Error;
