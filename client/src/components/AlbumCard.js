import React from 'react';
import { NavLink } from 'react-router-dom';
import { getYear } from 'date-fns';
import parseISO from 'date-fns/parseISO';
import PropTypes from 'prop-types';

function AlbumCard({ album }) {
  const parseDate = (dateStr) => {
    const date = parseISO(dateStr);
    return getYear(date);
  };

  return (
    <div className='list__item'>
      <div className='item__wrapper'>
        <div className='wrapper__cover'>
          <img src={album.imageSrc} alt='bf cover' draggable={false} />
        </div>
        <div className='wrapper__details'>
          <h3>
            {album.albumTitle} - {parseDate(album.albumReleaseDate)}
          </h3>
          <p>{album.albumAuthor}</p>
        </div>
        <NavLink
          to={`/albums/${album.albumSlug}`}
          className='wrapper__actions link'
        >
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
