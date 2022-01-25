import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import { CharsPage, ComicsPage, NotFound, SingleComic } from '../../pages';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <AppHeader />
        <main>
          <Routes>
            <Route path='/' element={<CharsPage />} />
            <Route path='/comics' element={<ComicsPage />} />
            <Route path='/comics/:id' element={<SingleComic />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
