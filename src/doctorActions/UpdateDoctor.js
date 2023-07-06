import * as React from 'react';
import {Paper, Button, Grid, TextField} from '@mui/material';
import { Avatar} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import FormControlLabel from '@mui/material/FormControlLabel';
import ScrollingPaper from '../components/ScrollingPaper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateReceptionist() {

    const paperStyle={padding:20, width:400, margin:'150px auto'}
    const avatarStyle={backgroundColor:"#00ff99", margin:'10px auto'}
    const textfieldStyle={margin:'10px auto'}
    const headerStyle={margin:'10px auto 30px auto'}
    const btn1Style={backgroundColor:"#00ff99",margin:'20px auto 20px auto'}
    const btn2Style={backgroundColor:"#D10034",margin:'0 auto 20px auto'}

    let navigate = useNavigate();

    const {id} = useParams()

    const [doctor, setDoctor] = useState({
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
    
    // const {first_name, last_name, address, birthdate, gender, service_start_date, email, contact, password} = user

    const handle = (e) => {
        setDoctor({...doctor, [e.target.name] : e.target.value});
      };

    const handleRadioChange = (event) => {
        setDoctor({ ...doctor, gender: event.target.value });
      };

      const submit =async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/receptionist/updateDoctorByID/${id}`,doctor);
        navigate("/homeDoctor");
      }
      
      React.useEffect(()=>{ 
        loadDoctor()
    },[]);

      const loadDoctor =async (id)=>{
        const result = await axios.get(`http://localhost:8080/api/receptionist/getDoctorByID/${id}`)
        setDoctor(result.data)
      }
  
      // const url=`http://localhost:8080/api/user/updateUserByID/${id}`
      // const [data, setData] = useState({
      //   first_name:"",
      //   last_name:"",
      //   address:"",
      //   birthdate:"",
      //   gender:"",
      //   email:"",
      //   contact:"",
      //   password:""
      // });
  
      // function submit(e){
      //   e.preventDefault();
      //   axios.post(url,{
      //     first_name:data.first_name,
      //     last_name:data.last_name,
      //     address:data.address,
      //     birthdate:data.birthdate,
      //     gender:data.gender,
      //     email:data.email,
      //     contact:data.contact,
      //     password:data.password
      //   })
      //   .then(res=>{
      //     console.log(res.data)
      //   })
      //   navigate("/")
      // }
  
      // function handle(e){
      //   const newdata = {...data}
      //   newdata[e.target.id] = e.target.value
      //   setData(newdata)
      // }

    return(
      <Grid>
      <ScrollingPaper>
      <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
              <Avatar style={avatarStyle}><PersonIcon/></Avatar>
              <h2 style={headerStyle}>Edit Doctor</h2>
          </Grid>

          <form onSubmit={(e)=>submit(e)}>

          <TextField onChange={(e)=>handle(e)} id='first_name' style={textfieldStyle} label="First Name" placeholder='First Name' value={doctor.first_name} fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='last_name' style={textfieldStyle} label="Last Name" placeholder='Last Name' value={doctor.last_name} fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='specialization' style={textfieldStyle} label="Specialization" placeholder='Specialization' value={doctor.specialization} fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='service_start_date' style={textfieldStyle} label="Service Start Date" placeholder='Service Start Date' value={doctor.service_start_date} fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='available_days_of_week' style={textfieldStyle} label="Available Days Of Week" placeholder='Available Days Of Week' value={doctor.available_days_of_week} fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='available_time' style={textfieldStyle} label="Available Tidoctorme" placeholder='Available Time' value={doctor.available_time} fullWidth Required/>
                
                <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" style={{display:'initial'}} name="gender" onChange={(e)=>handleRadioChange(e)}>
                  <FormControlLabel value="Male" control={<Radio />} label="Male" />
                  <FormControlLabel value="Female" control={<Radio />} label="Female" />
                </RadioGroup>
                </FormControl>
                
                <TextField onChange={(e)=>handle(e)} id='service_start_date' style={textfieldStyle} label="Service Start Date" value={doctor.service_start_date} placeholder='Service Start Date' fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='email' style={textfieldStyle} label="Email" value={doctor.email} placeholder='Email' fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='contact' style={textfieldStyle} label="Contact" value={doctor.contact} placeholder='Contact' fullWidth Required/>
                <TextField onChange={(e)=>handle(e)} id='password' style={textfieldStyle} label="Password" type="password" value={doctor.password} placeholder='Password' fullWidth Required/>
                <TextField id="outlined-basic" style={textfieldStyle} label="Re-enter Password" type="password" placeholder='Re-enter Password' fullWidth Required/>

            <Button type="submit" variant="contained" to="" color="primary" style={btn1Style} fullWidth>
            Update
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
