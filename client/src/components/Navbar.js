import React from 'react';
import { BsCollectionPlay } from 'react-icons/bs';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__wrapper'>
        <h2>Mustier</h2>
        <div className='wrapper__links'>
          <div className='links__link'>
            <BsCollectionPlay />
          </div>
          <div className='links__link'>
            <BsCollectionPlay />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
