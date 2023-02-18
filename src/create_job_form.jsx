import React from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default class Create_Job_Form extends React.Component {

    constructor() {
        super();
        this.state = ({
            id: '',
            job_number: "",
            job_title: '',
            job_start_date: '',
            job_close_date: '',
            experience_required: '',
            number_of_openings: '',
            job_description: ''
        })
    }

    id = (e) => {
        this.setState({
            id: e.target.value,
        });
    }

    job_number = (e) => {
        this.setState({
            job_number: e.target.value,
        });
    }

    job_title = (e) => {
        this.setState({
            job_title: e.target.value,
        });
    }

    job_start_date = (e) => {
        this.setState({
            job_start_date: e.target.value,
        });
    }

    job_close_date = (e) => {
        this.setState({
            job_close_date: e.target.value,
        });
    }

    experience_required = (e) => {
        this.setState({
            experience_required: e.target.value,
        });
    }

    number_of_openings = (e) => {
        this.setState({
            number_of_openings: e.target.value,
        });
    }
    job_description = (e) => {
        this.setState({
            job_description: e.target.value,
        });
    }


    savedata = async (event) => 
    {
        event.preventDefault(0);
        console.log(this.state);

        event.preventDefault();
        await axios.post('http://localhost:3000/jobs', this.state);
        alert("Successfully Create Job");


        this.setState({
            id: '',
            job_number: "",
            job_title: '',
            job_start_date: '',
            job_close_date: '',
            experience_required: '',
            number_of_openings: '',
            job_description: ''
        });

        window.location.assign('/');

    }

    redirectJobPortal = () => {
        // window.history.push('/');
    }


    render() {
        return (
            <>
                <form onSubmit={this.savedata}>
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
                                                className="form-control border-dark text-left" onChange={this.id} value={this.state.id} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 px-4 py-2">
                                        <div className="form-group">
                                            <label htmlFor="job_number" className='text-light fw-bold mb-1'>Job Number : </label>
                                            <input type="text" name="job_number" placeholder="JOB NUMBER"
                                                className="form-control border-dark text-left" onChange={this.job_number} value={this.state.job_number} />
                                        </div>
                                    </div>
                                    <div className="col-md-12 px-4 py-2">
                                        <div className="form-group">
                                            <label htmlFor="job_title" className='text-light fw-bold mb-1'>Job Title : </label>
                                            <input type="job_title" name="ob_title" placeholder="JOB TITLE"
                                                className="form-control border-dark text-left" required onChange={this.job_title} value={this.state.job_title} />
                                        </div>
                                    </div>

                                    <div className="col-md-6 px-4 py-2">
                                        <div className="form-group">
                                            <label htmlFor="job_start_date" className='text-light fw-bold mb-1'>Job Start Date : </label>
                                            <input type="date" name="job_start_date" placeholder="JOB START DATE"
                                                className="form-control border-dark text-left" required onChange={this.job_start_date} value={this.state.job_start_date} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 px-4 py-2">
                                        <div className="form-group">
                                            <label htmlFor="job_closing_date" className='text-light fw-bold mb-1'>Job Closing Date : </label>
                                            <input type="date" name="job_closing_date" placeholder="JOB CLOSING DATE"
                                                className="form-control border-dark text-left" onChange={this.job_close_date} value={this.state.job_close_date} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 px-4 py-2">
                                        <div className="form-group">
                                            <label htmlFor="experience" className='text-light fw-bold mb-1'>Relevant Experience : </label>
                                            <input type="number" name="experience" placeholder="Relevant Experience"
                                                className="form-control border-dark text-left" onChange={this.experience_required} value={this.state.experience_required} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 px-4 py-2">
                                        <div className="form-group">
                                            <label htmlFor="no_of_openings" className='text-light fw-bold mb-1'>No Of Openings : </label>
                                            <input type="text" name="no_of_openings" placeholder="No Of Openings"
                                                className="form-control border-dark text-left" onChange={this.number_of_openings} value={this.state.number_of_openings} />
                                        </div>
                                    </div>
                                    <div className="col-md-12 px-4">
                                        <label htmlFor="job_desc" className='text-light fw-bold mb-1'>Job Description : </label>
                                        <textarea className="text-left w-100 form-control border-dark" name="Job Decription" id="" cols="10" rows="2"
                                            placeholder="Job Description" onChange={this.job_description} value={this.state.job_description}></textarea>
                                    </div>
                                    <div className="col-md-12 text-center mt-3 mb-1">
                                        <button type="submit" className="btn text-white px-4 py-2 fw-bold" onClick={this.redirectJobPortal} style={{ 'fontFamily': 'sans-serif', 'borderRadius': '20px', 'backgroundColor': 'navy' }}>CREATE JOB
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </>
        )
    }
}