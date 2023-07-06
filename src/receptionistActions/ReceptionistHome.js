import * as React from 'react';
import {Paper, Button, Grid, TextField} from '@mui/material';
import { Link } from "react-router-dom";
import ScrollingPaper from '../components/ScrollingPaper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../components/cards.css';

export default function ReceptionistHome() {

    const card1Style={padding:20, width:400}
    const card2Style={padding:20, width:400}


    return(
        <Grid>
            <ScrollingPaper>

            <div className="cards-container">
            <Card style={card1Style} sx={{ maxWidth: 345 }}>
            <Link className='' to="/addPatient">
                <CardActionArea>
                    <CardMedia
                    sx={{ height: 140 }}
                    image='../images/register.png'
                    // title="green iguana"
                    />
                    <CardContent>
                    <Typography align="center" gutterBottom variant="h5" component="div">
                        Register Patient
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            </Card>
            <Card style={card2Style} sx={{ maxWidth: 345 }}>
            <Link className='' to="/getPatient">
            <CardActionArea>
                <CardMedia
                sx={{ height: 140 }}
                image="../images/view.jpg"
                // title="green iguana"
                />
                <CardContent>
                <Typography align="center" gutterBottom variant="h5" component="div">
                    View Patients
                </Typography>
                </CardContent>
                </CardActionArea>
            </Link>
            </Card>

            <Card style={card2Style} sx={{ maxWidth: 345 }}>
            <Link className='' to="/makeAppointment">
            <CardActionArea>
                <CardMedia
                sx={{ height: 140 }}
                image="../images/view.jpg"
                // title="green iguana"
                />
                <CardContent>
                <Typography align="center" gutterBottom variant="h5" component="div">
                    Make Appointment
                </Typography>
                </CardContent>
                </CardActionArea>
            </Link>
            </Card>


            </div>
            
            </ScrollingPaper>
        </Grid>

    )
}
