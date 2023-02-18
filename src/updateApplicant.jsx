import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


export default function UpdateApplicant() {

    const redirect = useNavigate();

    const param = useParams();
    console.log(param);
    console.log(param.id);

    const [data, setdata] = useState([]);

    const[id,setId]=useState([]);
    const[job_number,setjob_number]=useState([]);
    const[job_title,setjob_title]=useState([]);
    const[job_start_date,setjob_start_date]=useState([]);
    const[job_close_date,setjob_close_date]=useState([]);
    const[experience_required,setexperience_required]=useState([]);
    const[number_of_openings,setnumber_of_openings]=useState([]);
    const[job_description,setjob_description]=useState([]);



    const updateform = async (id) => {
        console.log(id);
        await axios.put(`http://localhost:3000/jobs/${id}`,
            {
                id:id,
                job_number:job_number,
                job_title:job_title,
                job_start_date:job_start_date,
                job_close_date:job_close_date,
                experience_required:experience_required,
                number_of_openings:number_of_openings,
                job_description:job_description,   

            }).then(response => {
                alert("Successfully Updated");
                redirect('/');

            }).catch(error => {
                alert("Wrong data");
            })
    }

    //call function
    useEffect(() => {
        loaduser();
    }, []) 

    const loaduser = async () => {
        var result = await axios.get(`http://localhost:3000/jobs/${param.id}`);
        //get all data
        console.log(result);
        console.log(result.data);

        //setdata
        setdata(result.data);

        setId(result.data.id);
        setjob_number(result.data.job_number);
        setjob_title(result.data.job_title);
        setjob_start_date(result.data.job_start_date);
        setjob_close_date(result.data.job_close_date);
        setexperience_required(result.data.experience_required);
        setnumber_of_openings(result.data.number_of_openings);
        setjob_description(result.data.job_description);
    }


    return (
        <>
         <div className='container-fluid job_container'>
                        <div className='row'>
                            <div className="col-md-10 m-auto mt-2">
                                <div className="row border shadow-lg p-3 form_section">
                                    <div className="col-md-12">
                                        <h3 className='text-center text-light fw-bold mb-3 text-uppercase'>Job Application Form</h3>
                                    </div>
                                    <div className="col-md-6 px-4 py-2">
                                        <div className="form-group">
                                            <label htmlFor="job_id" className='text-light fw-bold mb-1'>Job Id : </label>
                                            <input type="number" name="name" placeholder="Job_Id" disabled
                                                className="form-control border-dark text-left" defaultValue={id} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 px-4 py-2">
                                        <div className="form-group">
                                            <label htmlFor="job_number" className='text-light fw-bold mb-1'>Job Number : </label>
                                            <input type="text" name="job_number" placeholder="JOB NUMBER"
                                                className="form-control border-dark text-left" defaultValue={job_number} onChange={(e) => setjob_number(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-12 px-4 py-2">
                                        <div className="form-group">
                                            <label htmlFor="job_title" className='text-light fw-bold mb-1'>Job Title : </label>
                                            <input type="job_title" name="ob_title" placeholder="JOB TITLE"
                                                className="form-control border-dark text-left" required defaultValue={job_title} onChange={(e) => setjob_title(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="col-md-6 px-4 py-2">
                                        <div className="form-group">
                                            <label htmlFor="job_start_date" className='text-light fw-bold mb-1'>Job Start Date : </label>
                                            <input type="date" name="job_start_date" placeholder="JOB START DATE"
                                                className="form-control border-dark text-left" required defaultValue={job_start_date} onChange={(e) => setjob_start_date(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 px-4 py-2">
                                        <div className="form-group">
                                            <label htmlFor="job_closing_date" className='text-light fw-bold mb-1'>Job Closing Date : </label>
                                            <input type="date" name="job_closing_date" placeholder="JOB CLOSING DATE"
                                                className="form-control border-dark text-left" defaultValue={job_close_date} onChange={(e) => setjob_close_date(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 px-4 py-2">
                                        <div className="form-group">
                                            <label htmlFor="experience" className='text-light fw-bold mb-1'>Relevant Experience : </label>
                                            <input type="number" name="experience" placeholder="Relevant Experience"
                                                className="form-control border-dark text-left" defaultValue={experience_required} onChange={(e) => setexperience_required(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 px-4 py-2">
                                        <div className="form-group">
                                            <label htmlFor="no_of_openings" className='text-light fw-bold mb-1'>No Of Openings : </label>
                                            <input type="text" name="no_of_openings" placeholder="No Of Openings"
                                                className="form-control border-dark text-left" defaultValue={number_of_openings} onChange={(e) => setnumber_of_openings(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-12 px-4">
                                        <label htmlFor="job_desc" className='text-light fw-bold mb-1'>Job Description : </label>
                                        <textarea className="text-left w-100 form-control border-dark" name="Job Decription" id="" cols="10" rows="2"
                                            placeholder="Job Description" defaultValue={job_description} onChange={(e) => setjob_description(e.target.value)}></textarea>
                                    </div>
                                    <div className="col-md-12 text-center mt-3 mb-1">
                                        <button type="submit" className="btn text-white px-4 py-2 fw-bold" onClick={() => updateform(data.id)} style={{ 'fontFamily': 'sans-serif', 'borderRadius': '20px', 'backgroundColor': 'navy' }}>UPDATE JOB
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

        </>
    )
}




   
   




 


