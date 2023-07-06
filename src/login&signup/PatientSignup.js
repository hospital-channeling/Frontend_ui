import { Avatar, Grid, Paper, TextField, Button, Typography} from '@mui/material';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ScrollingPaper from '../components/ScrollingPaper';
import {Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signup=()=>{

    const paperStyle={padding:20, width:400, margin:'80px auto'}
    const avatarStyle={backgroundColor:"#00ff99", margin:'10px auto'}
    const textfieldStyle={margin:'10px auto'}
    const headerStyle={margin:'10px auto 30px auto'}
    const btn1Style={backgroundColor:"#00ff99",margin:'20px auto 20px auto'}
    const typoStyle={margin:'10px 20px 40px 20px'}

    let navigate = useNavigate();

    const handleRadioChange = (event) => {
      setData({ ...data, gender: event.target.value });
    };

    const url="http://localhost:8080/api/user/saveUser"
    const [data, setData] = useState({
      first_name:"",
      last_name:"",
      address:"",
      birthdate:"",
      gender:"",
      email:"",
      contact:"",
      password:""
    });

    function submit(e){
      e.preventDefault();
      axios.post(url,{
        first_name:data.first_name,
        last_name:data.last_name,
        address:data.address,
        birthdate:data.birthdate,
        gender:data.gender,
        email:data.email,
        contact:data.contact,
        password:data.password
      });
      navigate("/home");
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
                    <Avatar style={avatarStyle}><AddCircleOutlineOutlinedIcon/></Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                </Grid>

                <form onSubmit={(e)=>submit(e)}>

                <TextField onChange={(e)=>handle(e)} id='first_name' style={textfieldStyle} label="First Name" placeholder='First Name' value={data.first_name} fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='last_name' style={textfieldStyle} label="Last Name" placeholder='Last Name' value={data.last_name} fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='address' style={textfieldStyle} label="Address" placeholder='Address' value={data.address} fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='birthdate' style={textfieldStyle} label="Birthdate" placeholder='Birthdate' value={data.birthdate} fullWidth Required/>
                <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" style={{display:'initial'}} name="gender" onChange={(e)=>handleRadioChange(e)}>
                  <FormControlLabel value="Male" control={<Radio />} label="Male" />
                  <FormControlLabel value="Female" control={<Radio />} label="Female" />
                </RadioGroup>
                </FormControl>
                <TextField onChange={(e)=>handle(e)} id='email' style={textfieldStyle} label="Email" value={data.email} placeholder='Email' fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='contact' style={textfieldStyle} label="Contact" value={data.contact} placeholder='Contact' fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='password' style={textfieldStyle} label="Password" type="password" value={data.password} placeholder='Password' fullWidth Required/>
                <TextField id="outlined-basic" style={textfieldStyle} label="Re-enter Password" type="password" placeholder='Re-enter Password' fullWidth Required/>

                <Button type="submit" variant="contained" to="" color="primary" style={btn1Style} fullWidth>
                Sign Up
                </Button>

                </form>

            <Typography style={typoStyle}> Already have an account ? 
            <Link to="/patientLogin">
                Sign In
            </Link>
            </Typography>

            </Paper>
            </ScrollingPaper>
        </Grid>

    )
}

export default Signup;