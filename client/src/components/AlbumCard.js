import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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
        <NavLink to={`/albums/${album.slug}`} className='wrapper__actions link'>
          See More
        </NavLink>
      </div>
    </div>
  );
}

export default AlbumCard;

AlbumCard.propTypes = {
  album: PropTypes.object,
};
