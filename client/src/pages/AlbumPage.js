import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import SongsTable from '../components/SongsTable';

function AlbumPage() {
  const [album, setAlbum] = useState({});
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
        <SongsTable songs={album.albumSongs} />
      </div>
      <div className='album-page__footer'>Footer</div>
    </div>
  );
}

export default AlbumPage;
