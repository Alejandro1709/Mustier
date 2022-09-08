import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import { Fragment } from 'react';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Wrapper>
        <HomePage />
      </Wrapper>
    </Fragment>
  );
}

export default App;
