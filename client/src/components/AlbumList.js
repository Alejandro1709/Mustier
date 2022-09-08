import React from 'react';
import AlbumCard from './AlbumCard';

function AlbumList({ albums }) {
  return (
    <div className='homePage__list'>
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
}

export default AlbumList;
