import React from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

function SongEditForm() {
  return (
    <div className='edit-songForm'>
      <form className='edit-songForm__wrapper'>
        <input type='text' placeholder='Song Title' />
        <input type='number' placeholder='3.4' />
        <button className='confirm-btn' type='submit'>
          <AiOutlineCheck />
        </button>
        <button className='dismiss-btn' type='button'>
          <AiOutlineClose />
        </button>
      </form>
    </div>
  );
}

export default SongEditForm;
