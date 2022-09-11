import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import HomePage from './pages/HomePage';
import AlbumPage from './pages/AlbumPage';
import NewAlbumPage from './pages/NewAlbumPage';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/albums/new' element={<NewAlbumPage />} />
          <Route path='/albums/:slug' element={<AlbumPage />} />
          <Route path='/login' element={<h2>Login Page</h2>} />
          <Route path='*' element={<h2>Not Found</h2>} />
        </Routes>
      </Wrapper>
    </Fragment>
  );
}

export default App;
