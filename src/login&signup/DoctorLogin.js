import {Avatar, Grid, Paper, TextField, Button, Typography} from '@mui/material';
import * as React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import ScrollingPaper from '../components/ScrollingPaper';
import { useNavigate } from 'react-router-dom';

const Login=()=>{

    let navigate = useNavigate();

    function submit(e){
        e.preventDefault();
        navigate("/homeDoctor");
        // .then(res=>{
        //   console.log(res.data)
        // })
      }

    const paperStyle={padding:20, height:'70vh', width:350, margin:'80px auto'}
    const avatarStyle={backgroundColor:"#00ff99", margin:'10px auto'}
    const textfieldStyle={margin:'10px auto'}
    const headerStyle={margin:'10px auto 30px auto'}
    const btnStyle={backgroundColor:"#00ff99",margin:'10px auto 20px auto'}

    return(
        <Grid>
            <ScrollingPaper>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2 style={headerStyle}>Sign In</h2>
                </Grid>

                <form onSubmit={(e)=>submit(e)}>

                <TextField id="outlined-basic" style={textfieldStyle} label="Email" placeholder='Email' fullWidth Required/>
                <TextField id="outlined-basic" style={textfieldStyle} label="Password" type="password" placeholder='Password' fullWidth Required/>

                <FormControlLabel
                control={
                <Checkbox
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                />
                }
                label="Remember me"
                />

            <Button variant="contained" color="primary" style={btnStyle} fullWidth>
            Sign In
            </Button>

            </form>

            <Typography>
            <Link to="#">
                Forgot Password ?
            </Link>
            </Typography>

            <Typography> Don't have an account ? 
            <Link to='/doctorSignup'>
                Sign Up
            </Link>
            </Typography>

            </Paper>
            </ScrollingPaper>
        </Grid>

    )
}

export default Login;