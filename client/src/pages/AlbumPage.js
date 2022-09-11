import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import SongsTable from '../components/SongsTable';

function AlbumPage() {
  const [album, setAlbum] = useState({});
  const [songTitle, setSongTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { slug } = useParams();

  const fetchAlbumBySlug = async (slug) => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(
        `http://localhost:2030/api/v1/albums/${slug}`
      );
      setAlbum(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const handleCreateSong = async (e) => {
    e.preventDefault();

    if (!songTitle) return;

    setIsLoading(true);

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const newSong = {
      songTitle: songTitle,
      songAuthor: album.albumAuthor,
      songReleaseDate: album.albumReleaseDate,
    };

    try {
      const { data } = await axios.post(
        `http://localhost:2030/api/v1/albums/${slug}/songs`,
        JSON.stringify(newSong),
        config
      );
      album.albumSongs.push(data);
      setIsLoading(false);
      setSongTitle('');
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchAlbumBySlug(slug);

    return () => {
      setAlbum({});
    };
  }, [slug]);

  if (isLoading) return <p>Loading album...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='album-page container'>
      <div className='album-page__header'>
        <NavLink className='link-b' to='/'>
          Back
        </NavLink>
        <h2>{album.albumTitle}</h2>
        <button>Share Tier</button>
      </div>
      <div className='album-page__body'>
        <SongsTable
          songs={album.albumSongs}
          handleCreateSong={handleCreateSong}
          title={songTitle}
          setTitle={setSongTitle}
        />
      </div>
      <div className='album-page__footer'>
        <p>Edit Album</p>
        <p>Tier List made by alejandro.js</p>
        <p>Delete Album</p>
      </div>
    </div>
  );
}

export default AlbumPage;
