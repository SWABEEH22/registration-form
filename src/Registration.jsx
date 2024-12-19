import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    phone: '',
    email: '',
    course: '',
    gender: '',
    skills: []  
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData(prevState => {
        const updatedSkills = checked
          ? [...prevState.skills, value]  
          : prevState.skills.filter(skill => skill !== value);  
        return { ...prevState, skills: updatedSkills };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let students = JSON.parse(sessionStorage.getItem('students')) || [];
    students.push(formData);
    sessionStorage.setItem('students', JSON.stringify(students));

    
    sessionStorage.setItem('registrationMessage', `${formData.name}, you are successfully registered!`);

   
    navigate('/view-students');
  };

  const handleClear = () => {
    setFormData({
      name: '',
      dob: '',
      phone: '',
      email: '',
      course: '',
      gender: '',
      skills: []  
    });
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{backgroundColor:'grey' }}> 
      <form onSubmit={handleSubmit} className="p-4 border border-dark border-2 rounded shadow-sm" style={{backgroundColor:'teal' }}>
        <h1 className="mb-3 text-center fw-bold" style={{ color: 'rgb(8, 3, 24)' }}>Registration Form</h1>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required autoFocus />
        </div>

        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender:</label>
          <div className="d-flex flex m-1">
            <div className="form-check">
              <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} className="form-check-input" required />
              <label className="form-check-label">Male</label>
            </div>

            <div className="form-check">
              <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} className="form-check-input" required />
              <label className="form-check-label">Female</label>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} pattern="[0-9]{10}" title="Phone number must be 10 digits" className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
        </div>

        <div className="mb-3">
          <label htmlFor="course" className="form-label">Qualification:</label>
          <select name="course" value={formData.course} onChange={handleChange} className="form-select" required>
            <option value="" disabled>Select your Qualification</option>
            <option value="Bsc Cs">Bsc Computer Science</option>
            <option value="BCA">BCA</option>
            <option value="Bcom">Bcom</option>
            <option value="BBA">BBA</option>
            <option value="MCA">MCA</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Skills:</label>
          <div className="d-flex flex">
            <div className="form-check">
              <input 
                type="checkbox" 
                name="skills" 
                value="HTML" 
                checked={formData.skills.includes("HTML")} 
                onChange={handleChange} 
                className="form-check-input"
              />
              <label className="form-check-label">HTML</label>
            </div>
            <div className="form-check">
              <input 
                type="checkbox" 
                name="skills" 
                value="CSS" 
                checked={formData.skills.includes("CSS")} 
                onChange={handleChange} 
                className="form-check-input"
              />
              <label className="form-check-label">CSS</label>
            </div>
            <div className="form-check">
              <input 
                type="checkbox" 
                name="skills" 
                value="JavaScript" 
                checked={formData.skills.includes("JavaScript")} 
                onChange={handleChange} 
                className="form-check-input"
              />
              <label className="form-check-label">JavaScript</label>
            </div>
            <div className="form-check">
              <input 
                type="checkbox" 
                name="skills" 
                value="React" 
                checked={formData.skills.includes("React")} 
                onChange={handleChange} 
                className="form-check-input"
              />
              <label className="form-check-label">React</label>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary m-1">Register</button>
          <button type="button" onClick={handleClear} className="btn btn-danger m-1">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;