import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./tabel.css";
import moment from "moment";
import swal from "sweetalert";

const Touslesemployes = () => {
  const [runuser, setrun] = useState(0);
  const [user, setuser] = useState([]);

  useEffect(() => {
    return () => {
      axios
        .get("http://localhost:8000/api/employees")
        .then((res) => setuser(res.data));
    };
  }, [runuser]);

  async function delatuser(id) {
    swal({
      title: "Êtes-vous sûr de vouloir supprimer cet employé ?",
      text: "Une fois supprimé, vous ne pourrez plus récupérer ce fichier!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`http://localhost:8000/api/employees/${id}`);
        setrun((per) => per + 1);
        swal("Vous avez supprimé avec succès le fichier!", {
          icon: "success",
        });
      } else {
        swal("Vous n'avez pas supprimé ce fichier");
      }
    });
  }

  const formatDate = (isoDate) => {
    return moment(isoDate).format("YYYY-MM-DD"); // تنسيق التاريخ كما تريد هنا
  };
  const showUser = user.map((el, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td> {el.firstname} </td>
      <td>{el.lastname}</td>
      <td>{el.numero}</td>
      <td>{el.Fonction}</td>
      <td>{formatDate(el.Duree_demploi.startDate)}</td>
      <td>{el.Chatiment}</td>
      <td className="sp">
        <i
          onClick={() => delatuser(el._id)}
          style={{ fontSize: "23px", color: "red" }}
          className="fa-sharp fa-solid fa-trash cur"
        ></i>
        <Link
          to={`/AdminHome/Updatemplos/${el._id}`}
          style={{ fontSize: "23px", color: "green" }}
          className="fa-sharp fa-solid fa-pen-to-square cur"
          
        ></Link>
      </td>
    </tr>
  ));

  return (
    <div style={{ padding: "20px", overflowY: "scroll", height: "600px" }}>
      <table>
        <thead>
          <tr style={{ background: "orangered" }}>
            <td>Id</td>
            <td>firstname</td>
            <td>lasttname</td>
            <td>numero</td>
            <td>Fonction</td>
            <td>Duree Demploi</td>
            <td>Chatiment</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>{showUser}</tbody>
      </table>
    </div>
  );
};

export default Touslesemployes;
