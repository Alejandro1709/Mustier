import React from 'react';

function SongRow({ num, song, onSongEdition, handleAddSongToParams }) {
  const handleSongEdition = () => {
    handleAddSongToParams(song._id);
    onSongEdition(true);
  };
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
        <button onClick={handleSongEdition}>Edit</button>
        <button>Delete</button>
        <span>Reorder</span>
      </div>
    </div>
  );
}

export default SongRow;
