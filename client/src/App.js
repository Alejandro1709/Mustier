import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import { Fragment } from 'react';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/albums/new' element={<h2>New Album Page</h2>} />
          <Route path='/albums/:slug' element={<h2>Album Page</h2>} />
          <Route path='/login' element={<h2>Login Page</h2>} />
          <Route path='*' element={<h2>Not Found</h2>} />
        </Routes>
      </Wrapper>
    </Fragment>
  );
}

export default App;
