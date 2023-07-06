import * as React from 'react';
import {Paper, Button, Grid, TextField} from '@mui/material';
import { Avatar} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import FormControlLabel from '@mui/material/FormControlLabel';
// import { Link } from "react-router-dom";
import ScrollingPaper from '../components/ScrollingPaper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function RegisterUser() {

    const paperStyle={padding:20, width:400, margin:'150px auto'}
    const avatarStyle={backgroundColor:"#00ff99", margin:'10px auto'}
    const textfieldStyle={margin:'10px auto'}
    const headerStyle={margin:'10px auto 30px auto'}
    const btn1Style={backgroundColor:"#00ff99",margin:'20px auto 20px auto'}
    const btn2Style={backgroundColor:"#D10034",margin:'0 auto 20px auto'}

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

    // const user={firstname,lastname,address,birthdate,gender,email,contact,password};

    // const onSubmit = async (e)=>{
    //     e.preventDefault();
    //     await axios.post("http://localhost:8080/api/user/saveUser",user);
    //             // console.log(user)
    //             // fetch("http://localhost:8080/api/user/saveUser",{
    //             //     method:"POST",
    //             //     headers:{"Content-Type":"application/json"},
    //             //     body:JSON.stringify(user)
    //             // }).then(()=>{
    //             //     console.log("User Added")
    //             // })
    // };

    return(
        <Grid>
            <ScrollingPaper>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><PersonIcon/></Avatar>
                    <h2 style={headerStyle}>Register User</h2>
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
                Register
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
