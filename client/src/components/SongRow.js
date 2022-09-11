import React from 'react';

function SongRow({ num, song }) {
  return (
    <div className='list__track'>
      <div className='track__left'>
        <span>{num + 1}.</span>
        <h3>
          {song.songTitle} - {song.songAuthor}
        </h3>
      </div>
      <div className='track__right'>
        <b>{String(song.songDuration).replace('.', ':')}</b>
        <span>Edit</span>
        <span>Delete</span>
        <span>Reorder</span>
      </div>
    </div>
  );
}

export default SongRow;
