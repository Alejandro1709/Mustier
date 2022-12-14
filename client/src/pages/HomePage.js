import React from 'react';
import AlbumList from '../components/AlbumList';
import Alert from '../components/Alert';

function HomePage() {
  return (
    <div className='homePage'>
      <h1 className='mb-1'>My Albums (0)</h1>
      {/* <div className='alert-list'>
        <Alert type='loading'>Loading...</Alert>
        <Alert type='danger'>Error: Not Authenticated</Alert>
      </div> */}
      <AlbumList />
    </div>
  );
}

export default HomePage;
