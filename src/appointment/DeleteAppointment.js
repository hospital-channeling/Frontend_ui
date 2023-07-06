import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import { Container, Paper, Button } from '@mui/material';

export default function DeleteAppointment() {
    const paperStyle={padding:'50px 20px', width:600, margin:'20px auto'}
    const[doctor_name, setDoctorName]=useState("")
    const[patient_name, setPatientName]=useState("")
    const[app_date, setAppDate]=useState("")
    const[app_status, setStatus]=useState("")
    const clickSubmit=(e)=>{
        e.preventDefault()
        const appointment={doctor_name,patient_name,app_date,app_status}
        console.log(appointment)
        fetch("http://localhost:8080/api/appointment/appointmentdelete",{
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(appointment)
        }).then(()=>{
            console.log("Appointment Deleted")
        })
    }

    
    
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '35ch' },}}
          noValidate
          autoComplete="off">
            
        <h1 color='primary'>DELETE Appointment</h1>
     
      
    </Box>
    </Paper>
    </Container>
  );
}
