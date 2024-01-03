import React from 'react';
import "./header.css"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link className='logo'>NTV</Link>
      <nav>
        <ul>
          <Link to={"/"} className='li'>Home</Link>
          <Link to={"AdminHome"} className='li'>Administration</Link>
          <Link className='li'>Maintenance</Link>
          <Link className='li'>Buses</Link>
        </ul>
      </nav>
      <button>logaut</button>
    </header>
  );
}

export default Header;
