import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="contaner-home">
      <div className="body">
        <Link to={'/AdminHome'} className="card">
          <div className="empol"></div>
           <h1>administration</h1>
        </Link>
        <Link  className="card ">
          <div className="syana"></div>
          <h1>Maintenance</h1>
        </Link>
      </div>
    </div>
  );
};

export default Home;
