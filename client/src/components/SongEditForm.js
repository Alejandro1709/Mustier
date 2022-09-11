import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';

function SongEditForm({ handleEditSong }) {
  const [editedSong, setEditedSong] = useState({});

  const [songTitle, setSongTitle] = useState('');
  const [songDuration, setSongDuration] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const songId = searchParams.get('songId');

  const handleGetSong = async (slug, songId) => {
    try {
      const { data } = await axios.get(
        `http://localhost:2030/api/v1/albums/${slug}/songs/${songId}`
      );

      setEditedSong(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!songTitle || !songDuration) return;

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const dataa = {
      songTitle: songTitle || editedSong.songTitle,
      songDuration: songDuration || editedSong.songDuration,
    };

    try {
      const { data } = await axios.patch(
        `http://localhost:2030/api/v1/albums/${slug}/songs/${songId}`,
        JSON.stringify(dataa),
        config
      );

      setEditedSong(data);
      setLoading(false);

      handleEditSong(false);

      navigate(`/albums/${slug}`);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    handleGetSong(slug, songId);
    return () => {
      setEditedSong({});
    };
  }, [slug, songId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='edit-songForm'>
      <form onSubmit={handleSubmit} className='edit-songForm__wrapper'>
        <input
          type='text'
          name='songTitle'
          placeholder={editedSong.songTitle}
          value={songTitle}
          onChange={(e) => setSongTitle(e.target.value)}
        />
        <input
          name='songDuration'
          type='number'
          placeholder='3.45'
          step='any'
          value={songDuration}
          onChange={(e) => setSongDuration(e.target.value)}
        />
        <button className='confirm-btn' type='submit'>
          <AiOutlineCheck />
        </button>
        <button
          onClick={() => handleEditSong(false)}
          className='dismiss-btn'
          type='button'
        >
          <AiOutlineClose />
        </button>
      </form>
    </div>
  );
}

export default SongEditForm;
