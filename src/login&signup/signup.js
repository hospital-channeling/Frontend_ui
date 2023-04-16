import { Avatar, Grid, Paper, TextField, Button, Typography} from '@mui/material';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import ScrollingPaper from '../components/ScrollingPaper';
import { Link } from "react-router-dom";


const Signup=()=>{

    const paperStyle={padding:20, width:400, margin:'80px auto'}
    const avatarStyle={backgroundColor:"#00ff99", margin:'10px auto'}
    const textfieldStyle={margin:'10px auto'}
    const headerStyle={margin:'10px auto 30px auto'}
    const btnStyle={backgroundColor:"#00ff99",margin:'10px auto 20px auto'}
    const typoStyle={margin:'10px 20px 40px 20px'}

    const [value, setValue] = React.useState('male');
    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return(
        <Grid>
            <ScrollingPaper>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><AddCircleOutlineOutlinedIcon/></Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                </Grid>

                <TextField id="outlined-basic" style={textfieldStyle} label="First Name" placeholder='First Name' fullWidth Required/>
                <TextField id="outlined-basic" style={textfieldStyle} label="Last Name" placeholder='Last Name' fullWidth Required/>
                <TextField id="outlined-basic" style={textfieldStyle} label="Address" placeholder='Address' fullWidth Required/>
                <TextField id="outlined-basic" style={textfieldStyle} label="Birthdate" placeholder='Birthdate' fullWidth Required/>
                {/* <TextField id="outlined-basic" size="small" style={textfieldStyle} label="Age" placeholder='Age' fullWidth Required/> */}
                <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} style={{display:'initial'}} onChange={handleChange}>
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                  </RadioGroup>
                </FormControl>
                <TextField id="outlined-basic" style={textfieldStyle} label="Email" placeholder='Email' fullWidth Required/>
                <TextField id="outlined-basic" style={textfieldStyle} label="Contact" placeholder='Contact' fullWidth Required/>
                <TextField id="outlined-basic" style={textfieldStyle} label="Password" type="password" placeholder='Password' fullWidth Required/>
                <TextField id="outlined-basic" style={textfieldStyle} label="Re-enter Password" type="password" placeholder='Re-enter Password' fullWidth Required/>

                <FormControlLabel
                control={
                <Checkbox
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                />
                }
                label="I accept the terms and conditions"
                />

            <Button variant="contained" to="" color="primary" style={btnStyle} fullWidth>
            Sign Up
            </Button>


            <Typography style={typoStyle}> Already have an account ? 
            <Link to="/">
                Sign In
            </Link>
            </Typography>


            </Paper>
            </ScrollingPaper>
        </Grid>

    )
}

export default Signup;