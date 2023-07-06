import * as React from 'react';
import { useState } from "react";
import axios from "axios";
import ScrollingPaper from '../components/ScrollingPaper';
import {Paper} from '@mui/material';
import { Link } from "react-router-dom";


export default function GetAppointmentDetails() {

    const [appointment, setAppointment] = useState([]);
    const paperStyle={padding:20, margin:'150px 30px'}

    React.useEffect(() =>{
        loadAppointmentDetails();
    },[]);

    const loadAppointmentDetails=async()=>{
        const result = await axios.get("http://localhost:8080/api/appointment/appointmentget")
        setAppointment(result.data);
    }

    const deleteUser =async (id) =>{
        await axios.delete(`http://localhost:8080/api/appointment/appointmentdelete/${id}`);
        loadAppointmentDetails();
    }

  return (
    <ScrollingPaper>
        <Paper elevation={10} style={paperStyle}>
        {/* <div className='container'> */}
            <div className='py-4'>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Appointment Number</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Doctor Name</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointment.map((appointment,index)=>(
                        <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{appointment.appointment_id}</td>
                        <td>{appointment.patient_name}</td>
                        <td>{appointment.doctor_name}</td>
                        <td>{appointment.app_date}</td>
                        <td>{appointment.app_status}</td>
                        <td>
                            <Link to={"/getAppointmentById"} className='btn btn-primary mx-2'>View</Link>
                            <Link to={`/updateAppointment/${appointment.id}`} className='btn btn-outline-primary mx-2'>Edit</Link>
                            <button onClick={()=>deleteUser(appointment.id)} className='btn btn-danger mx-2' href="/deleteAppointment">Delete</button>
                        </td>
                        </tr>
                    ))
                }
            
            </tbody>
            </table>
            </div>

        {/* </div> */}
        </Paper>
    </ScrollingPaper>
  )
}
