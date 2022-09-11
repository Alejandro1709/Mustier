import React, { Fragment } from 'react';
import SongRow from './SongRow';

function SongsTable({ songs }) {
  return (
    <Fragment>
      <div className='body__list'>
        {songs &&
          songs.length > 0 &&
          songs.map((song, idx) => (
            <SongRow key={song._id} num={idx} song={song} />
          ))}
      </div>
      <form className='body__form'>
        <div className='form-group'>
          <input type='text' placeholder='Enter Track Title...' />
          <button className='submit-btn' type='submit'>
            Add Track
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default SongsTable;
