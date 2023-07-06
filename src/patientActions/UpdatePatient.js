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

export default function UpdatePatient() {

    const paperStyle={padding:20, width:400, margin:'150px auto'}
    const avatarStyle={backgroundColor:"#00ff99", margin:'10px auto'}
    const textfieldStyle={margin:'10px auto'}
    const headerStyle={margin:'10px auto 30px auto'}
    const btn1Style={backgroundColor:"#00ff99",margin:'20px auto 20px auto'}
    const btn2Style={backgroundColor:"#D10034",margin:'0 auto 20px auto'}

    let navigate = useNavigate();

    const {id} = useParams()

    const [user, setUser] = useState({
      first_name: "",
      last_name: "",
      address: "",
      birthdate: "",
      gender: "",
      email: "",
      contact: "",
      password: ""
    });   
    
    // const {first_name, last_name, address, birthdate, gender, email, contact, password} = user

    const handle = (e) => {
        setUser({...user, [e.target.name] : e.target.value});
      };

    const handleRadioChange = (event) => {
        setUser({ ...user, gender: event.target.value });
      };

      const submit =async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/user/updateUserByID/${id}`,user);
        navigate("/");
      }
      
      React.useEffect(()=>{ 
        loadUser()
    },[]);

      const loadUser =async (id)=>{
        const result = await axios.get(`http://localhost:8080/api/user/getUserByID/${id}`)
        setUser(result.data)
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
              <h2 style={headerStyle}>Edit User</h2>
          </Grid>

          <form onSubmit={(e)=>submit(e)}>

          <TextField onChange={(e) => handle(e)} name='first_name' style={textfieldStyle} label="First Name" placeholder='First Name' value={user.first_name} fullWidth required />
          <TextField onChange={(e) => handle(e)} name='last_name' style={textfieldStyle} label="Last Name" placeholder='Last Name' value={user.last_name} fullWidth required />
          <TextField onChange={(e) => handle(e)} name='address' style={textfieldStyle} label="Address" placeholder='Address' value={user.address} fullWidth required />
          <TextField onChange={(e) => handle(e)} name='birthdate' style={textfieldStyle} label="Birthdate" placeholder='Birthdate' value={user.birthdate} fullWidth required />
          <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup aria-label="gender" style={{display:'initial'}} name="gender" onChange={(e)=>handleRadioChange(e)}>
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
          </RadioGroup>
          </FormControl>
          <TextField onChange={(e) => handle(e)} name='email' style={textfieldStyle} label="Email" value={user.email} placeholder='Email' fullWidth required />
          <TextField onChange={(e) => handle(e)} name='contact' style={textfieldStyle} label="Contact" value={user.contact} placeholder='Contact' fullWidth required />
          <TextField onChange={(e) => handle(e)} name='password' style={textfieldStyle} label="Password" type="password" value={user.password} placeholder='Password' fullWidth required />


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
