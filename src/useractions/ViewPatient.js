import * as React from 'react';
import {Paper,Grid} from '@mui/material';
import { Avatar} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import ScrollingPaper from '../components/ScrollingPaper';
import { useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

function ViewPatient() {

    const [user, setUser] = useState({
      first_name:"",
      last_name:"",
      address:"",
      birthdate:"",
      gender:"",
      email:"",
      contact:""
    });

    React.useEffect(()=>{ 
        loadUser()
    },[]);

    const {id} = useParams()

    const loadUser =async (id) =>{
        const result = await axios.get(`http://localhost:8080/api/user/getUserByID/${id}`)
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
                    <h2 style={headerStyle}>Patient Details</h2>
                </Grid>
                <h2>Details of user ID : # {user.id}</h2>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>First Name : </b> {user.first_name}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Last Name : </b> {user.last_name}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Address : </b> {user.address}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Birthdate : </b> {user.birthdate}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Gender : </b> {user.gender}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Email : </b> {user.email}
                    </li>
                </ul>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Contact : </b> {user.contact}
                    </li>
                </ul>

            <center><Link className='btn btn-primary my-2' to={"/"}>Back To Home</Link></center>


            </Paper>
            </ScrollingPaper>
        </Grid>

    )






}

export default ViewPatient;