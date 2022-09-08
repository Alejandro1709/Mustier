import React from 'react';

function AlbumCard() {
  return (
    <div className='list__item'>
      <div className='item__wrapper'>
        <div className='wrapper__cover'>
          <img
            src='https://pm1.narvii.com/6342/e48d28039aa2e1e360a0629afcf2c013f99d2435_hq.jpg'
            alt='bf cover'
            draggable={false}
          />
        </div>
        <div className='wrapper__details'>
          <h3>Blurryface - 2015</h3>
          <p>Twenty One Pilots</p>
        </div>
        <div className='wrapper__actions'>See More</div>
      </div>
    </div>
  );
}

export default AlbumCard;
