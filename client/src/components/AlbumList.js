import React, { useState, useEffect } from 'react';
import AlbumCard from './AlbumCard';
import axios from 'axios';

function AlbumList() {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFetchAlbums = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get('http://localhost:2030/api/v1/albums');
      setAlbums(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    handleFetchAlbums();

    return () => {
      setAlbums([]);
    };
  }, []);

  if (isLoading) return <p>Loading albums...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='homePage__list'>
      {albums.map((album) => (
        <AlbumCard key={album._id} album={album} />
      ))}
    </div>
  );
}

export default AlbumList;
