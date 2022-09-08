import React from 'react';
import AlbumCard from './AlbumCard';

function AlbumList() {
  return (
    <div className='homePage__list'>
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
    </div>
  );
}

export default AlbumList;
