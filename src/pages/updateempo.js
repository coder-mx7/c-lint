import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./updateDay.css";
import { toast } from "react-toastify";

const Updatemplos = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [Fonction, setFonction] = useState("");
  const [numero, setnumero] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/employees/${id}`, {
        numero: numero,
        Fonction: Fonction,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response);
          nav(`/AdminHome/Tous`);
          return toast.success("Mis à jour avec succés");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/employees/${id}`).then((res) => {
      console.log(res.data);
      setFirst(res.data.firstname);
      setLast(res.data.lastname);
      setFonction(res.data.Fonction);
      setnumero(res.data.numero);
    });
  }, [id]); // تم تحديث الـ dependencies هنا

  return (
    <div className="flex-container">
      <div className="flex1">
        <form className="flex" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={(e) => setFirst(e.target.value)}
            id="firstName"
            placeholder="Enter your first name"
            type="text"
            value={firstName}
            required
            disabled
          />

          <label htmlFor="email">Last Name</label>
          <input
            onChange={(e) => setLast(e.target.value)}
            id="email"
            placeholder="Enter Last Name"
            type="text"
            value={lastName}
            required
            disabled
          />

          <label htmlFor="password">Fonction</label>
          <input
            onChange={(e) => setFonction(e.target.value)}
            id="Days"
            placeholder="Enter your Days"
            type="text"
            value={Fonction}
            required
          />
          <label htmlFor="password">numero</label>
          <input
            onChange={(e) => setnumero(e.target.value)}
            id="Days"
            placeholder="Enter your Days"
            type="number"
            value={numero}
            required
          />
          <button className="submit" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Updatemplos;
