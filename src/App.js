import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Job_Portal from './Job_portal';
import Create_Job_Form from './create_job_form';
//import DeleteApplicant from './DeleteApplicant';
import UpdateApplicant from './updateApplicant.jsx';

export default function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Job_Portal />}></Route>
          <Route path="/create_jobs" element={<Create_Job_Form/>}></Route>
          <Route path="/updateApplicant/:id" element={<UpdateApplicant/>}></Route>
        </Routes>
      </Router>

    </>
  )
}