import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./updateDay.css";
import { toast } from "react-toastify";

const Update = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [daysavlabels, setdaysavlabels] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/employees/${id}`, {
        daysavlabels: daysavlabels,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          nav(`/Print`);
        }
        return toast.success("Mis à jour avec succés");
      })
      .catch((err) => {
        console.log(err);
        return toast.error("L'opération de mise à jour a échoué");
      });
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/employees/${id}`).then((res) => {
      setFirst(res.data.firstname);
      setLast(res.data.lastname);
      setdaysavlabels(res.data.daysavlabels);
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
            placeholder="Enter your Last Name"
            type="text"
            value={lastName}
            required
            disabled
          />

          <label htmlFor="password">Days Avlabels</label>
          <input
            onChange={(e) => setdaysavlabels(e.target.value)}
            id="password"
            placeholder="Enter your password"
            type="number"
            value={daysavlabels}
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

export default Update;
