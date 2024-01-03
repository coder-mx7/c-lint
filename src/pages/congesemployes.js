import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './tabel.css'
const Congesemployes = () => {
  const [user, setuser] = useState([]);

  useEffect(() => {
    return () => {
      axios
        .get("http://localhost:8000/api/employees")
        .then((res) => setuser(res.data));
    };
  }, []);

  const showUser = user.map((el, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td> {el.firstname} </td>
      <td>{el.lastname}</td>
      <td>{el.daysavlabels}</td>
      <td className="sp">
        <Link
          to={`/AdminHome/update/${el._id}`}
          style={{ fontSize: "23px", color: "green" }}
          className="fa-sharp fa-solid fa-pen-to-square cur"
        ></Link>
      </td>
    </tr>
  ));

  return (
  
  <div style={{ padding: "20px" , overflowY: "scroll", height:"600px" }}>
      <table>
        <thead>
          <tr style={{ background: "orangered" }}>
            <td>Id</td>
            <td>firstname</td>
            <td>lasttname</td>
            <td>daysavlabels</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>{showUser}</tbody>
      </table>
    </div>
  );
};

export default Congesemployes;
