import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewAlbumPage() {
  const [albumTitle, setAlbumTitle] = useState('');
  const [albumAuthor, setAlbumAuthor] = useState('');
  const [albumReleaseDate, setAlbumReleaseDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleCreateAlbum = async (e) => {
    e.preventDefault();

    if (!albumTitle || !albumAuthor || !albumReleaseDate) return;

    setLoading(true);

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const newAlbum = {
      albumTitle,
      albumAuthor,
      albumReleaseDate,
    };

    try {
      const { data } = await axios.post(
        'http://localhost:2030/api/v1/albums',
        JSON.stringify(newAlbum),
        config
      );

      console.log(data);
      navigate('/');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  if (loading) return <p>Loading album...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='new-albumPage'>
      <h1>New Album</h1>
      <form onSubmit={handleCreateAlbum}>
        <div className='form-group'>
          <label htmlFor='albumTitle'>Album Title:</label>
          <input
            type='text'
            name='albumTitle'
            id='albumTitle'
            value={albumTitle}
            onChange={(e) => setAlbumTitle(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='albumAuthor'>Album Author:</label>
          <input
            type='text'
            name='albumAuthor'
            id='albumAuthor'
            value={albumAuthor}
            onChange={(e) => setAlbumAuthor(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='albumReleaseDate'>Album Release Date:</label>
          <input
            type='date'
            name='albumReleaseDate'
            id='albumReleaseDate'
            value={albumReleaseDate}
            onChange={(e) => setAlbumReleaseDate(e.target.value)}
          />
        </div>
        <button className='submit-btn' type='submit'>
          Create Album
        </button>
      </form>
    </div>
  );
}

export default NewAlbumPage;
