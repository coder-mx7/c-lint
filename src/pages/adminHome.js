import React from 'react';
import {Outlet } from "react-router-dom";
import './adminHome.css'
import Mine from './mine';
const AdminHome = () => {
  return (
    <div className="contianer">
      <h1>Bienvenue sur la page de gestion des employés</h1>
    <div className="continerTabel">
    <Mine />
      <div style={{ width: "75%" }}>
       <Outlet />
      </div>
    </div>
  </div>
  );
}

export default AdminHome;
