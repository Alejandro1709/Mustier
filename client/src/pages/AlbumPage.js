import React, { useState, useEffect } from 'react';
import { NavLink, useParams, useSearchParams } from 'react-router-dom';
import Modal from '../components/Modal';
import axios from 'axios';
import SongsTable from '../components/SongsTable';
import SongEditForm from '../components/SongEditForm';

function AlbumPage() {
  const [album, setAlbum] = useState({});
  const [songTitle, setSongTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [albumNewTitle, setAlbumNewTitle] = useState('');
  const [isEditingSong, setIsEditingSong] = useState(false);
  const [isEditingAlbum, setIsEditingAlbum] = useState(false);
  const [error, setError] = useState('');
  const [, setSearchParams] = useSearchParams();

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

  const handleAddSongToParams = (song) => {
    setSearchParams({ songId: song });
  };

  const handleEditAlbum = async (e) => {
    e.preventDefault();

    if (!albumNewTitle) return;

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    setIsLoading(true);

    try {
      const { data } = await axios.patch(
        `http://localhost:2030/api/v1/albums/${slug}`,
        JSON.stringify({ albumNewTitle }),
        config
      );
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  const handleDeleteAlbum = () => {
    console.log('Delete');
  };

  useEffect(() => {
    fetchAlbumBySlug(slug);

    return () => {
      setAlbum({});
    };
  }, [slug]);

  if (isLoading) return <p>Loading album...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='album-page container'>
      {isEditingSong && (
        <Modal>
          <SongEditForm handleEditSong={setIsEditingSong} />
        </Modal>
      )}
      {isEditingAlbum ? (
        <form onSubmit={handleEditAlbum} className='album-page__header'>
          <button type='button' onClick={() => setIsEditingAlbum(false)}>
            Cancel
          </button>
          <input
            name='albumTitle'
            type='text'
            placeholder={album.albumTitle}
            value={albumNewTitle}
            onChange={(e) => setAlbumNewTitle(e.target.value)}
          />
          <button type='submit'>Update</button>
        </form>
      ) : (
        <div className='album-page__header'>
          <NavLink className='link-b' to='/'>
            Back
          </NavLink>
          <h2>{album.albumTitle}</h2>
          <button>Share Tier</button>
        </div>
      )}
      <div className='album-page__body'>
        <SongsTable
          songs={album.albumSongs}
          handleCreateSong={handleCreateSong}
          title={songTitle}
          setTitle={setSongTitle}
          handleEditSong={setIsEditingSong}
          handleAddSongToParams={handleAddSongToParams}
        />
      </div>
      <div className='album-page__footer'>
        <button onClick={() => setIsEditingAlbum(true)}>Edit Album</button>
        <p>Tier List made by alejandro.js</p>
        <button onClick={handleDeleteAlbum}>Delete Album</button>
      </div>
    </div>
  );
}

export default AlbumPage;
