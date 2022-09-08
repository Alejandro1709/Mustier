import React from 'react';
import { useParams } from 'react-router-dom';
import { getAlbumBySlug } from '../albums';

function AlbumPage() {
  const { slug } = useParams();
  const album = getAlbumBySlug(slug);
  return (
    <div>
      <h1>{album.title} Page</h1>
    </div>
  );
}

export default AlbumPage;
