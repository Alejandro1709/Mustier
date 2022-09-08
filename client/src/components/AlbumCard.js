import React from 'react';

function AlbumCard({ album }) {
  return (
    <div className='list__item'>
      <div className='item__wrapper'>
        <div className='wrapper__cover'>
          <img src={album.imageSrc} alt='bf cover' draggable={false} />
        </div>
        <div className='wrapper__details'>
          <h3>{album.title} - 2015</h3>
          <p>{album.author}</p>
        </div>
        <div className='wrapper__actions'>See More</div>
      </div>
    </div>
  );
}

export default AlbumCard;
