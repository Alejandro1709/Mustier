import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__wrapper'>
        <NavLink className='link' to='/'>
          <h2>Mustier</h2>
        </NavLink>
        <div className='wrapper__links'>
          <NavLink to='/albums/new' className='links__link link'>
            <AiOutlinePlus />
          </NavLink>
          <NavLink to='/login' className='links__link link'>
            <FaUserAlt />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
