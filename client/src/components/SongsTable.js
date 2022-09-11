import React, { Fragment } from 'react';
import SongRow from './SongRow';

function SongsTable({
  songs,
  handleCreateSong,
  title,
  setTitle,
  handleEditSong,
}) {
  return (
    <Fragment>
      <div className='body__list'>
        {songs &&
          songs.length > 0 &&
          songs.map((song, idx) => (
            <SongRow
              key={song._id}
              num={idx}
              song={song}
              onSongEdition={handleEditSong}
            />
          ))}
      </div>
      <form onSubmit={handleCreateSong} className='body__form'>
        <div className='form-group'>
          <input
            type='text'
            name='songTitle'
            placeholder='Enter Track Title...'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className='submit-btn' type='submit'>
            Add Track
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default SongsTable;
