import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './Registration';  
import ViewStudents from './ViewStudents';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/view-students" element={<ViewStudents />} />
      </Routes>
    </Router>
  );
}

export default App;