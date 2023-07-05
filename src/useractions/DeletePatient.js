import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import { Container, Paper, Button } from '@mui/material';

export default function DeletePatient() {
    const paperStyle={padding:'50px 20px', width:600, margin:'20px auto'}
    const[firstname, setfirstName]=useState("")
    const[lastname, setlastName]=useState("")
    const[address, setAddress]=useState("")
    const[age, setAge]=useState("")
    const[birthdate, setBirthdate]=useState("")
    const[gender, setGender]=useState("")
    const clickSubmit=(e)=>{
        e.preventDefault()
        const patient={firstname,lastname,address,age,birthdate,gender}
        console.log(patient)
        fetch("http://localhost:8080/api/patient/deletePatient",{
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(patient)
        }).then(()=>{
            console.log("Patient Deleted")
        })
    }

    
    
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '35ch' },}}
          noValidate
          autoComplete="off">
            
        <h1 color='primary'>DELETE PATIENT</h1>
     
      
    </Box>
    </Paper>
    </Container>
  );
}
