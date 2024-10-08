import React, { useState } from 'react';
import '../css/booking.css';

function Book() {
  const [data, setData] = useState({
    id: '',
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    gender: '',
    phone: '',
    email: '',
    identityProof: ''
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the data to the backend via a POST request
    const response = await fetch('/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <div id='ff' style={{ margin: '0px', padding: '0px' }}>
      <form onSubmit={handleSubmit}>
        <h3>Id:</h3>
        <input type='text' name='id' className='book' placeholder='ID' onChange={handleChange} />
        <h3>First Name:</h3>
        <input type='text' name='firstName' placeholder='Your First Name' className='book' onChange={handleChange} />
        <h3>Middle Name:</h3>
        <input type='text' name='middleName' placeholder='Your Middle Name' className='book' onChange={handleChange} />
        <h3>Last Name:</h3>
        <input type='text' name='lastName' placeholder='Your Last Name' className='book' onChange={handleChange} />
        <h3>Dob:</h3>
        <input type='date' name='dob' className='book' onChange={handleChange} />
        <h3>Gender:</h3>
        <input type='text' name='gender' placeholder='Your Gender' className='book' onChange={handleChange} />
        <h3>Phone No.:</h3>
        <input type='text' name='phone' placeholder='Your Phone No.' className='book' onChange={handleChange} />
        <h3>Email Id:</h3>
        <input type='email' name='email' placeholder='Your Email Id' className='book' onChange={handleChange} />
        <h3>Proof of Identity:</h3>
        <input type='text' name='identityProof' placeholder='Your adhaar No.' className='book' onChange={handleChange} />
        <br />
        <br />
        <button style={{ fontSize: '20px' }}>Submit</button>
      </form>
    </div>
  );
}

export default Book;
