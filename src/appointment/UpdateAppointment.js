import * as React from 'react';
import {Paper, Button, Grid, TextField} from '@mui/material';
import { Avatar} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ScrollingPaper from '../components/ScrollingPaper';
import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateAppointment() {

    const paperStyle={padding:20, width:400, margin:'150px auto'}
    const avatarStyle={backgroundColor:"#00ff99", margin:'10px auto'}
    const textfieldStyle={margin:'10px auto'}
    const headerStyle={margin:'10px auto 30px auto'}
    const btn1Style={backgroundColor:"#00ff99",margin:'20px auto 20px auto'}
    const btn2Style={backgroundColor:"#D10034",margin:'0 auto 20px auto'}

    let navigate = useNavigate();

    const {appointment_id} = useParams()

    const [user, setUser] = useState({
      doctor_name:"",
      patient_name:"",
      app_date:"",
      time_slots:"",
      app_status:""
    });   
    


    const handle = (e) => {
        setUser({...user, [e.target.name] : e.target.value});
      };

      const submit =async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/appointment/appointmentupdate/${appointment_id}`,user);
        navigate("/getAppoitmnets");
      }
      
      React.useEffect(()=>{ 
        loadUser()
    },[]);

      const loadUser =async (id)=>{
        const result = await axios.get(`http://localhost:8080/api/appointment/appointmentgetbyid/${id}`)
        setUser(result.data)
      }
  
    return(
      <Grid>
      <ScrollingPaper>
      <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
              <Avatar style={avatarStyle}><PersonIcon/></Avatar>
              <h2 style={headerStyle}>Edit Appointment</h2>
          </Grid>

          <form onSubmit={(e)=>submit(e)}>

          <TextField onChange={(e) => handle(e)} name='doctor_name' style={textfieldStyle} label="Doctor Name" placeholder='Doctor Name' value={user.doctor_name} fullWidth required />
          <TextField onChange={(e) => handle(e)} name='patient_name' style={textfieldStyle} label="Patient Name" placeholder='Patient Name' value={user.patient_name} fullWidth required />
          <TextField onChange={(e) => handle(e)} name='app_date' style={textfieldStyle} label="Date" placeholder='YYYY-MM-DD' value={user.app_date} fullWidth required />
          <TextField onChange={(e) => handle(e)} name='time_slots' style={textfieldStyle} label="Time Preferred" placeholder='In 24hr format (ex: 14.30)' value={user.time_slots} fullWidth required />
          <TextField onChange={(e) => handle(e)} name='app_status' style={textfieldStyle} label="status of the appointment" value={user.email} placeholder='Confirmed or Not Confirmed' fullWidth required />

      <Button type="submit" variant="contained" to="" color="primary" style={btn1Style} fullWidth>
      UPDATE
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
