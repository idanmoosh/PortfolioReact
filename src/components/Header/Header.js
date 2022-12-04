import './header.css';
import React from 'react';

export const Header = () => {
  return (
    <div className='header'>
      <h1 className='logo'> Idan Haim</h1>
      <ul>
        <li>
          <a href='/' className='Link'>
            Home
          </a>
        </li>
        <li>
          <a href='/work' className='Link'>
            Work
          </a>
        </li>
        <li>
          <a href='/about' className='Link'>
            About
          </a>
        </li>
      </ul>
    </div>
  );
};
