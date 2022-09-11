import React from 'react';

function NewAlbumPage() {
  return (
    <div className='new-albumPage'>
      <h1>New Album</h1>
      <form>
        <div className='form-group'>
          <label htmlFor='albumTitle'>Album Title:</label>
          <input type='text' name='albumTitle' id='albumTitle' />
        </div>
        <div className='form-group'>
          <label htmlFor='albumAuthor'>Album Author:</label>
          <input type='text' name='albumAuthor' id='albumAuthor' />
        </div>
        <div className='form-group'>
          <label htmlFor='albumReleaseDate'>Album Release Date:</label>
          <input type='date' name='albumReleaseDate' id='albumReleaseDate' />
        </div>
        <button className='submit-btn' type='submit'>
          Create Album
        </button>
      </form>
    </div>
  );
}

export default NewAlbumPage;
