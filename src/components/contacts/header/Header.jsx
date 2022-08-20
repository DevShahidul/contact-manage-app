import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header_section d-flex align-center'>
      <div className='brand'>Contact App</div>
      <nav className='header_nav ml-auto'>
        <ul className='d-flex align-center'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/add-contact'>Add contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header