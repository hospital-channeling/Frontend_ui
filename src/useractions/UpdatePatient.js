import * as React from 'react';
import {Paper, Button, Grid, TextField} from '@mui/material';
import { Avatar} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from "react-router-dom";
import ScrollingPaper from '../components/ScrollingPaper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";

export default function UpdatePatient() {

    const[firstname, setfirstName]=useState("")
    const[lastname, setlastName]=useState("")
    const[address, setAddress]=useState("")
    const[birthdate, setBirthdate]=useState("")
    const[gender, setGender]=useState("")
    const[email, setEmail]=useState("")
    const[contact, setContact]=useState("")
    const[password, setPassword]=useState("")

    const paperStyle={padding:20, width:400, margin:'150px auto'}
    const avatarStyle={backgroundColor:"#00ff99", margin:'10px auto'}
    const textfieldStyle={margin:'10px auto'}
    const headerStyle={margin:'10px auto 30px auto'}
    const btn1Style={backgroundColor:"#00ff99",margin:'20px auto 20px auto'}
    const btn2Style={backgroundColor:"#D10034",margin:'0 auto 20px auto'}

    const [value, setValue] = React.useState('male');
    const handleChange = (event) => {
        setValue(event.target.value);
      };

      const clickSubmit=(e)=>{
                e.preventDefault()
                const patient={firstname,lastname,address,birthdate,gender,email,contact,password}
                console.log(patient)
                fetch("http://localhost:8080/api/patient/updatePatient",{
                    method:"PUT",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(patient)
                }).then(()=>{
                    console.log("Patient Updated")
                })
            }

    return(
        <Grid>
            <ScrollingPaper>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><PersonIcon/></Avatar>
                    <h2 style={headerStyle}>Update Patient</h2>
                </Grid>

                <TextField id="outlined-basic" style={textfieldStyle} label="First Name" placeholder='First Name' value={firstname} onChange={(e)=>setfirstName(e.target.value)} fullWidth Required/>
                <TextField id="outlined-basic" style={textfieldStyle} label="Last Name" placeholder='Last Name' value={lastname} onChange={(e)=>setlastName(e.target.value)} fullWidth Required/>
                <TextField id="outlined-basic" style={textfieldStyle} label="Address" placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)} fullWidth Required/>
                <TextField id="outlined-basic" style={textfieldStyle} label="Birthdate" placeholder='Birthdate' value={birthdate} onChange={(e)=>setBirthdate(e.target.value)} fullWidth Required/>
                <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} style={{display:'initial'}} onChange={handleChange}>
                    <FormControlLabel value="male" control={<Radio />} label="Male" onChange={(e)=>setGender(e.target.value)}/>
                    <FormControlLabel value="female" control={<Radio />} label="Female" onChange={(e)=>setGender(e.target.value)}/>
                  </RadioGroup>
                </FormControl>
                <TextField id="outlined-basic" style={textfieldStyle} label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' fullWidth Required/>
                <TextField id="outlined-basic" style={textfieldStyle} label="Contact" value={contact} onChange={(e)=>setContact(e.target.value)} placeholder='Contact' fullWidth Required/>
                <TextField id="outlined-basic" style={textfieldStyle} label="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' fullWidth Required/>
                <TextField id="outlined-basic" style={textfieldStyle} label="Re-enter Password" type="password" placeholder='Re-enter Password' fullWidth Required/>

                {/* <FormControlLabel
                control={
                <Checkbox
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                />
                }
                label="I accept the terms and conditions"
                /> */}

            <Button variant="contained" to="" color="primary" onClick={clickSubmit} style={btn1Style} fullWidth>
            UPDATE
            </Button>

            <Button variant="contained" to="" color="primary" style={btn2Style} fullWidth>
            CANCEL
            </Button>

            </Paper>
            </ScrollingPaper>
        </Grid>

    )
}
