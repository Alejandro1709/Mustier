import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SongRow({ num, song, onSongEdition, handleAddSongToParams }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSongEdition = () => {
    handleAddSongToParams(song._id);
    onSongEdition(true);
  };

  const handleEditSong = async () => {
    // eslint-disable-next-line no-restricted-globals
    let ans = confirm('Are you sure?');

    if (!ans) return;

    setLoading(true);

    try {
      const { data } = await axios.delete(
        `http://localhost:2030/api/v1/songs/${song._id}`
      );
      setLoading(false);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(error);
    }
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
        <button onClick={handleEditSong}>Delete</button>
        <span>Reorder</span>
      </div>
    </div>
  );
}

export default SongRow;
