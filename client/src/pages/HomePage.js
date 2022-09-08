import React from 'react';
import AlbumList from '../components/AlbumList';
import Alert from '../components/Alert';
import { getAlbums } from '../albums';

function HomePage() {
  const albums = getAlbums();

  return (
    <div className='homePage'>
      <h1 className='mb-1'>My Albums ({albums.length})</h1>
      {/* <div className='alert-list'>
        <Alert type='loading'>Loading...</Alert>
        <Alert type='danger'>Error: Not Authenticated</Alert>
      </div> */}
      <AlbumList albums={albums} />
    </div>
  );
}

export default HomePage;
