import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
      <span class="name">Fida Shnakher<i class="far fa-chess-queen"></i></span>
      <ul className='ul1'>
        <a href="Fida-Shnakher.docx"><button class="download">Download cv</button></a>
        <li><a href="/">Home</a></li>
        <li><a href="projects">Projects</a></li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar;
