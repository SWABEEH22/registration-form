import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import success from './assets/successs.png'

const ViewRegistration = () => {
  const [registrationData, setRegistrationData] = useState(null);

  useEffect(() => {

    const students = JSON.parse(sessionStorage.getItem('students')) || [];

 
    const lastRegisteredStudent = students[students.length - 1];


    setRegistrationData(lastRegisteredStudent);
  }, []);

  return (
    <div className="d-flex  align-items-center justify-content-center bg-dark" style={{height:'100vh'}}>
    <div className=' p-4 border rounded shadow-sm bg-light mt-1'>
        {registrationData ? (
          <div>
            <h2 className='text-info'>Hello <span className='text-warning'>{registrationData.name}</span> </h2>
            <p className='text text-success text-center fs-5'>You are Registered Successfully</p>
            <img className='img-fluid ' src={success} alt="" />
          </div>
        ) : (
          <p>No registration data found.</p>
        )}
        
  
          <div>
          <Link to="/" className="btn btn-primary mt-5">Go to Registration</Link>
          </div>
    </div>
    </div>
  );
};

export default ViewRegistration;