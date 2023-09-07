import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const UserForm = ({ initialValues, onSubmit }) => {
  const [formData, setFormData] = useState(initialValues || {});

  useEffect(() => {
    setFormData(initialValues || {});
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor="name">Name:</label>
        <input
		  className='form-control'
          type="text"
          id="name"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
        />
      </div>
    <div className='mb-3'>
        <label htmlFor="email">Email:</label>
        <input
		  className='form-control'
          type="text"
          id="email"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
        />
      </div>
	  <div className='mb-3'>
        <label htmlFor="phone">Phone:</label>
        <input
		  className='form-control'
          type="text"
          id="phone"
          name="phone"
          value={formData.phone || ''}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary"type="submit">Submit</button>
      <Link to="/" className="btn btn-success ms-3"> Back </Link>
    </form>
  );
};

export default UserForm;








