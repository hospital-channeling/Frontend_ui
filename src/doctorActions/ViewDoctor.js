import * as React from 'react';
import {Paper,Grid} from '@mui/material';
import { Avatar} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import ScrollingPaper from '../components/ScrollingPaper';
import { useState } from "react";
import axios from "axios";
// import { useParams } from 'react-router-dom';

function ViewDoctor() {

    const [doctor, setDoctor] = useState({
        first_name:"",
        last_name:"",
        specialization:"",
        service_start_date:"",
        available_days_of_week:"",
        available_time:"",
        gender:"",
        email:"",
        contact:"",
        password:""
      });

    React.useEffect(()=>{ 
        loadDoctor()
    },[]);

    // const {id} = useParams()

    const loadDoctor =async (id) =>{
        const result = await axios.get(`http://localhost:8080/api/doctor/getDoctorByID/${id}`)
        setDoctor(result.doctor)
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
                    <h2 style={headerStyle}>Doctor Details</h2>
                </Grid>
                <h2>Details of doctor ID : # {doctor.id}</h2>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>First Name : </b> {doctor.first_name}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Last Name : </b> {doctor.last_name}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Address : </b> {doctor.address}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Birthdate : </b> {doctor.birthdate}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Gender : </b> {doctor.gender}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Service Start Date : </b> {doctor.service_start_date}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Email : </b> {doctor.email}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Contact : </b> {doctor.contact}
                    </li>
                </ul>

            <center><Link className='btn btn-primary my-2' to={"/"}>Back To Home</Link></center>


            </Paper>
            </ScrollingPaper>
        </Grid>

    )






}

export default ViewDoctor;