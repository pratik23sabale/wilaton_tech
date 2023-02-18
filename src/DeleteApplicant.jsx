import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

export default function DeleteApplicant() {

    useEffect(()=>{
        Deleteuser();
    })

    const Deleteuser = async() => {

        const params = useParams();
        const navigate = useNavigate();

        await axios.delete(`https://localhost:3000/jobs/${params.id}`)
            .then((response) => {
                navigate('/');
            })
            .catch((error) => {
                console.log("error");
            });
    }
    return (
        <>
{/* <h1>hi</h1> */}

        </>
    )
}