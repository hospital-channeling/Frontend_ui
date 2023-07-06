import * as React from 'react';
import {Grid} from '@mui/material';
import { Link } from "react-router-dom";
import ScrollingPaper from '../components/ScrollingPaper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../components/cards.css';

export default function DoctorHome() {

    // const card1Style={padding:20, width:400}
    const card2Style={padding:20, width:400}

    return(
        <Grid>
            <ScrollingPaper>

            <div className="cards-container">
           
            <Card style={card2Style} sx={{ maxWidth: 345 }}>
            <Link className='' to="/UpdateDoctor">
            <CardActionArea>
                <CardMedia
                sx={{ height: 140 }}
                image="../images/view.jpg"
                // title="green iguana"
                />
                <CardContent>
                <Typography align="center" gutterBottom variant="h5" component="div">
                    Update Doctor Details
                </Typography>
                </CardContent>
                </CardActionArea>
            </Link>
            </Card>

            <Card style={card2Style} sx={{ maxWidth: 345 }}>
            <Link className='' to="/viewAppointments">
            <CardActionArea>
                <CardMedia
                sx={{ height: 140 }}
                image="../images/view.jpg"
                // title="green iguana"
                />
                <CardContent>
                <Typography align="center" gutterBottom variant="h5" component="div">
                    View Appointments
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
