import React from 'react';
import { Link } from 'react-router-dom';
import "./mine.css"
const Mine = () => {
  return (
    <div className='mine' >
      <Link to={"/AdminHome/Congesemployes"} >Gestion des vacances</Link>
      <Link to={'/AdminHome/Tous'}>Tous les employés</Link>
      <Link to={"/AdminHome/create"}>Ajouter un nouvel employé</Link>
    </div>
  );
}

export default Mine;
