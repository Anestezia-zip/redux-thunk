import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const Navbar = () => (
  <nav>
    <ul className='nav-list'>
      <li><Link to="/">Todos</Link></li>
      <li><Link to="/albums">Albums</Link></li>
      <li><Link to="/comments">Comments</Link></li>
      <li><Link to="/ricknmorty">Rick and Morty</Link></li>
    </ul>
  </nav>
);

export default Navbar;
