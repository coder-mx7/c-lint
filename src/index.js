import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminHome from "./pages/adminHome";
import Touslesemployes from "./pages/Touslesemployes";
import Congesemployes from "./pages/congesemployes";
import Update from "./pages/updateDAys";
import Updatemplos from "./pages/updateempo";
import PrintableComponent from "./pages/pagedeprnt";
import MyForm from "./pages/createnewEmo";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Print" element={<PrintableComponent />} />
        <Route path="/AdminHome" element={<AdminHome />}>
          <Route path="Tous" element={<Touslesemployes />} />
          <Route path="Update/:id" element={<Update />} />
          <Route path="Updatemplos/:id" element={<Updatemplos />} />
          <Route path="Congesemployes" element={<Congesemployes />} />
          <Route path="create" element={<MyForm />} />
        </Route>
        
      </Routes>
    </Router>
  </React.StrictMode>
);
