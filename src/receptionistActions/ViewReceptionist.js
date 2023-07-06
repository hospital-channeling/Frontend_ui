import * as React from 'react';
import {Paper,Grid} from '@mui/material';
import { Avatar} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import ScrollingPaper from '../components/ScrollingPaper';
import { useState } from "react";
import axios from "axios";
// import { useParams } from 'react-router-dom';

function ViewReceptionist() {

    const [receptionist, setReceptionist] = useState({
      first_name:"",
      last_name:"",
      address:"",
      birthdate:"",
      gender:"",
      service_start_date:"",
      email:"",
      contact:""
    });

    React.useEffect(()=>{ 
        loadReceptionist()
    },[]);

    // const {id} = useParams()

    const loadReceptionist =async (id) =>{
        const result = await axios.get(`http://localhost:8080/api/receptionist/getReceptionistByID/${id}`)
        setReceptionist(result.receptionist)
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
                    <h2 style={headerStyle}>Receptionist Details</h2>
                </Grid>
                <h2>Details of user ID : # {receptionist.id}</h2>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>First Name : </b> {receptionist.first_name}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Last Name : </b> {receptionist.last_name}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Address : </b> {receptionist.address}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Birthdate : </b> {receptionist.birthdate}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Gender : </b> {receptionist.gender}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Service Start Date : </b> {receptionist.service_start_date}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Email : </b> {receptionist.email}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Contact : </b> {receptionist.contact}
                    </li>
                </ul>

            <center><Link className='btn btn-primary my-2' to={"/"}>Back To Home</Link></center>


            </Paper>
            </ScrollingPaper>
        </Grid>

    )






}

export default ViewReceptionist;