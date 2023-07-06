import * as React from 'react';
import {Paper,Grid} from '@mui/material';
import { Avatar} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import ScrollingPaper from '../components/ScrollingPaper';
import { useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

function ViewAppoitmentById() {

    const [user, setUser] = useState({
        appointment_id:"",
        doctor_name:"",
        patient_name:"",
        app_date:"",
        time_slots:"",
        app_status:""
    });

    React.useEffect(()=>{ 
        loadUser()
    },[]);

    const {id} = useParams()

    const loadUser =async (id) =>{
        const result = await axios.get(`http://localhost:8080/api/appointment/appointmentgetbyid/${id}`)
        setUser(result.user)
    }

    const paperStyle={padding:20, width:400, margin:'150px auto'}
    const avatarStyle={backgroundColor:"#00ff99", margin:'10px auto'}
    const headerStyle={margin:'10px auto 30px auto'}

    return(
        <Grid>
            <ScrollingPaper>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><PersonIcon/></Avatar>
                    <h2 style={headerStyle}>Appointment Details</h2>
                </Grid>
                <h2>Details of user ID : # {user.id}</h2>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Appointment Number : </b> {user.appointment_id}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Patient Name : </b> {user.patient_name}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Doctor Name : </b> {user.doctor_name}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Appointment Date : </b> {user.app_date}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Appointment Time : </b> {user.time_slots}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Appointment Status : </b> {user.app_status}
                    </li>
                </ul>

            <center><Link className='btn btn-primary my-2' to={"/getAppoitmnets"}>Back To Home</Link></center>


            </Paper>
            </ScrollingPaper>
        </Grid>

    )






}

export default ViewAppoitmentById;