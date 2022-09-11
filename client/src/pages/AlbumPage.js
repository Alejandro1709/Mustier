import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    <div>
      <h1>{album.albumTitle} Page</h1>
    </div>
  );
}

export default AlbumPage;
