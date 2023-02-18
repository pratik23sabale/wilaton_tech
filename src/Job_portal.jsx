import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Job_Portal() {

  var i = 0;
  const [data, setData] = useState([]);
  const redirect = useNavigate();


  useEffect(() => {
    loadData();
  })

  const loadData = async () => {
    const result = await axios.get('http://localhost:3000/jobs');
    setData(result.data)
  }
  console.log(data);




  const deleteApplicant = async (id, e) => {
    //alert(id);
    e.preventDefault();
    await axios.delete(`http://localhost:3000/jobs/${id}`)
      .then(res => console.log("Deleted User", res))
      .catch((error => console.log(error)));
  }

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className="col-md-12 my-3 bg-secondary m-0">
            <marquee behavior="slideshow" direction="right"><h5 className='fw-bold text-light p-2'>WILATON INDUSTRY JOB PORTAL</h5></marquee>
          </div>
          <div className="col-md-12 m-auto mt-2">
            <table className='table table-bordered  text-center table-striped table-responsive table-hover  shadow-lg bg-dark text-light text-center p-2'>
              <thead>
                <tr>
                  <th>JOB_ID</th>
                  <th>JOB NUMBER</th>
                  <th>JOB TITLE</th>
                  <th>JOB START DATE</th>
                  <th>JOB CLOSE DATE</th>
                  <th>RELEVANT EXP.</th>
                  <th>NO OF OPENINGS</th>
                  <th>JOB DESC</th>
                </tr>
              </thead>

              {

                data.map((value) => {
                  return (
                    <>

                      <tbody className='bg-light text-dark'>
                        <tr>
                          <td>{i += 1}</td>
                          <td>{value.job_number}</td>
                          <td>{value.job_title}</td>
                          <td>{value.job_start_date}</td>
                          <td>{value.job_close_date}</td>
                          <td>{value.experience_required}</td>
                          <td>{value.number_of_openings}</td>
                          <td>{value.job_description}</td>

                          {/* <td><Link to={`/deleteApplicant/${value.id}`}><i className='fa fa-trash fw-bold text-danger'></i></Link></td> */}
                          <td><i className='fa fa-trash fw-bold text-danger' onClick={(e) => deleteApplicant(value.id, e)}></i></td>                          <td>
                          <Link to={`/updateApplicant/${value.id}`}> <i className='fa fa-edit fw-bold text-secondary'></i></Link></td>
                        </tr>
                      </tbody>

                    </>
                  )
                })
              }

            </table>
          </div>
          <div className='col-md-12 text-center'>
            <button className='btn btn-dark px-4 fw-bold text-light shadow-lg text-center' onClick={() => redirect('/create_jobs')}>CREATE JOB</button>
          </div>
        </div>
      </div>


    </>
  )
}