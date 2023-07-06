import { Avatar, Grid, Paper, TextField, Button, Typography} from '@mui/material';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ScrollingPaper from '../components/ScrollingPaper';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

const Signup=()=>{

    const paperStyle={padding:20, width:400, margin:'80px auto'}
    const avatarStyle={backgroundColor:"#00ff99", margin:'10px auto'}
    const textfieldStyle={margin:'10px auto'}
    const headerStyle={margin:'10px auto 30px auto'}
    const btn1Style={backgroundColor:"#00ff99",margin:'20px auto 20px auto'}
    const btn2Style={backgroundColor:"#D10034",margin:'0 auto 20px auto'}

    const typoStyle={margin:'10px 20px 40px 20px'}

    let navigate = useNavigate();

    const handleRadioChange = (event) => {
      setData({ ...data, gender: event.target.value });
    };

    const url="http://localhost:8080/api/doctor/saveDoctor"
    const [data, setData] = useState({
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

    function submit(e){
      e.preventDefault();
      axios.post(url,{
        first_name:data.first_name,
        last_name:data.last_name,
        specialization:data.specialization,
        service_start_date:data.service_start_date,
        available_days_of_week:data.available_days_of_week,
        available_time:data.available_time,
        gender:data.gender,
        email:data.email,
        contact:data.contact,
        password:data.password
      });
      navigate("/homeDoctor");
  
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
                    <h2 style={headerStyle}>Doctor Sign Up</h2>
                </Grid>

                <form onSubmit={(e)=>submit(e)}>

                <TextField onChange={(e)=>handle(e)} id='first_name' style={textfieldStyle} label="First Name" placeholder='First Name' value={data.first_name} fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='last_name' style={textfieldStyle} label="Last Name" placeholder='Last Name' value={data.last_name} fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='specialization' style={textfieldStyle} label="Specialization" placeholder='Specialization' value={data.specialization} fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='service_start_date' style={textfieldStyle} label="Service Start Date" placeholder='Service Start Date' value={data.service_start_date} fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='available_days_of_week' style={textfieldStyle} label="Available Days Of Week" placeholder='Available Days Of Week' value={data.available_days_of_week} fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='available_time' style={textfieldStyle} label="Available Time" placeholder='Available Time' value={data.available_time} fullWidth Required/>
                
                <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" style={{display:'initial'}} name="gender" onChange={(e)=>handleRadioChange(e)}>
                  <FormControlLabel value="Male" control={<Radio />} label="Male" />
                  <FormControlLabel value="Female" control={<Radio />} label="Female" />
                </RadioGroup>
                </FormControl>
                
                <TextField onChange={(e)=>handle(e)} id='service_start_date' style={textfieldStyle} label="Service Start Date" value={data.service_start_date} placeholder='Service Start Date' fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='email' style={textfieldStyle} label="Email" value={data.email} placeholder='Email' fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='contact' style={textfieldStyle} label="Contact" value={data.contact} placeholder='Contact' fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='password' style={textfieldStyle} label="Password" type="password" value={data.password} placeholder='Password' fullWidth Required/>
                <TextField id="outlined-basic" style={textfieldStyle} label="Re-enter Password" type="password" placeholder='Re-enter Password' fullWidth Required/>

            <Button type="submit" variant="contained" to="" color="primary" style={btn1Style} fullWidth>
            Sign Up
            </Button>

            <Button type="cancel" variant="contained" to="" color="primary" style={btn2Style} fullWidth>
            CANCEL
            </Button>

            </form>


            <Typography style={typoStyle}> Already have an account ? 
            <Link to="/doctorLogin">
                Sign In
            </Link>
            </Typography>


            </Paper>
            </ScrollingPaper>
        </Grid>

    )
}

export default Signup;