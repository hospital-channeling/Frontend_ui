import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function UpdatePatient() {
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
        fetch("http://localhost:8080/api/patient/updatePatient",{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(patient)
        }).then(()=>{
            console.log("Patient Updated")
        })
    }

    
    
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
    <Box component="form" sx={{'& > :not(style)': { m: 1, width: '35ch' },}}
      noValidate
      autoComplete="off">
        
        {/* <h1 color='primary'>UPDATE PATIENT</h1> */}
      <TextField id="outlined-basic" label="First Name" variant="outlined" 
      value={firstname} onChange={(e)=>setfirstName(e.target.value)}/>
      <TextField id="outlined-basic" label="Last Name" variant="outlined" 
      value={lastname} onChange={(e)=>setlastName(e.target.value)}/>
      <TextField id="outlined-basic" label="Address" variant="outlined" 
      value={address} onChange={(e)=>setAddress(e.target.value)}/>
      <TextField id="outlined-basic" label="Age" variant="outlined" 
      value={age} onChange={(e)=>setAge(e.target.value)}/>
      <TextField id="outlined-basic" label="Birthdate" variant="outlined" 
      value={birthdate} onChange={(e)=>setBirthdate(e.target.value)}/>
      <TextField id="outlined-basic" label="Gender" variant="outlined" 
      value={gender} onChange={(e)=>setGender(e.target.value)}/>
      <TextField id="outlined-basic" label="Email" variant="outlined" 
      value={gender} onChange={(e)=>setGender(e.target.value)}/>
      <TextField id="outlined-basic" label="Contact" variant="outlined" 
      value={gender} onChange={(e)=>setGender(e.target.value)}/>

    <Button variant="contained" color="primary" onClick={clickSubmit}>
    UPDATE
    </Button>
    <Button variant="contained" color="secondary" onClick={clickSubmit}>
    CANCEL
    </Button>
      
    </Box>
    </Paper>
    </Container>
  );
}
