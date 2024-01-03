import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from "react-toastify";

const MyForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    Fonction: '',
    numero:'',
    daysavlabels: 0,
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/employees/newemployees', {
        firstname: formData.firstname,
        lastname: formData.lastname,
        Fonction: formData.Fonction,
        numero:formData.numero,
        daysavlabels: formData.daysavlabels,
        Duree_demploi: {
          startDate: formData.startDate,
        }
      });
      // أداء أي عمليات أخرى بعد الإرسال الناجح
    if (response.data) return toast.success("Enregistré avec succès");

    } catch (error) {
      console.error('Error:', error);
      // إدارة الأخطاء في حالة حدوث خطأ في الطلب
    if (error) return toast.error("L'opération d'enregistrement a échoué");

    }
  };

  return (
    <div className="flex-container">

    <div className="flex1">
    <Form className='flex' onSubmit={handleSubmit}>
      <Form.Group controlId="firstname">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="lastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="numero">
        <Form.Label>numero de telphon</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter numero"
          name="numero"
          value={formData.numero}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group  controlId="Fonction">
        <Form.Label>your Fonction </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your Fonction"
          name="Fonction"
          value={formData.Fonction}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="daysavlabels">
        <Form.Label>Daysavlabels</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Daysavlabels"
          name="daysavlabels"
          value={formData.daysavlabels}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="startDate">
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
  );
};

export default MyForm;
