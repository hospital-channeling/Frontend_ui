import * as React from 'react';
import {Paper, Button, Grid, TextField} from '@mui/material';
import { Avatar} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
// import { Link } from "react-router-dom";
import ScrollingPaper from '../components/ScrollingPaper';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function CreateAppointment() {

    const paperStyle={padding:20, width:400, margin:'150px auto'}
    const avatarStyle={backgroundColor:"#00ff99", margin:'10px auto'}
    const textfieldStyle={margin:'10px auto'}
    const headerStyle={margin:'10px auto 30px auto'}
    const btn1Style={backgroundColor:"#00ff99",margin:'20px auto 20px auto'}
    const btn2Style={backgroundColor:"#D10034",margin:'0 auto 20px auto'}

    let navigate = useNavigate();

    const url="http://localhost:3000/api/appointment/appointmentcreate"
    const [data, setData] = useState({
      doctor_name:"",
      patient_name:"",
      app_date:""
    });

    function submit(e){
      e.preventDefault();
      axios.post(url,{
        doctor_name:data.doctor_name,
        patient_name:data.patient_name,
        app_date:data.app_date
      });
      navigate("/getAppoitmnets");
      // .then(res=>{
      //   console.log(res.data)
      // })
    }

    function handle(e){
      const newdata = {...data}
      newdata[e.target.id] = e.target.value
      setData(newdata)
    }
  
    return(
        <Grid>
            <ScrollingPaper>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><PersonIcon/></Avatar>
                    <h2 style={headerStyle}>Book Appointment</h2>
                </Grid>

                <form onSubmit={(e)=>submit(e)}>

                <TextField onChange={(e)=>handle(e)} id='doctor_name' style={textfieldStyle} label="Doctor Name" placeholder='Doctor Name' value={data.doctor_name} fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='patient_name' style={textfieldStyle} label="Patient Name" placeholder='Patient Name' value={data.patient_name} fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='app_date' style={textfieldStyle} label="Date" placeholder='YYYY-MM-DD' value={data.app_date} fullWidth Required/>
          
            <Button type="submit" variant="contained" to="" color="primary" style={btn1Style} fullWidth>
            SUBMIT
            </Button>

            <Button type="cancel" variant="contained" to="" color="primary" style={btn2Style} fullWidth>
            CANCEL
            </Button>

            </form>

            </Paper>
            </ScrollingPaper>
        </Grid>

    )

}
