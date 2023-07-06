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
import Appbar from '../components/Appbar';

export default function UserSelectionPage() {

    const card1Style={padding:20, width:400}
    const card2Style={padding:20, width:400}

    return(
        <Grid>
            <Appbar/>
            <ScrollingPaper>

            <div className="cards-container">
            <Card style={card1Style} sx={{ maxWidth: 345 }}>
            <Link className='' to="/doctorLogin">
                <CardActionArea>
                    <CardMedia
                    sx={{ height: 140 }}
                    image='../images/register.png'
                    // title="green iguana"
                    />
                    <CardContent>
                    <Typography align="center" gutterBottom variant="h5" component="div">
                        Doctor
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            </Card>


            <Card style={card2Style} sx={{ maxWidth: 345 }}>
            <Link className='' to="/patientLogin">
            <CardActionArea>
                <CardMedia
                sx={{ height: 140 }}
                image="../images/view.jpg"
                // title="green iguana"
                />
                <CardContent>
                <Typography align="center" gutterBottom variant="h5" component="div">
                    Patient
                </Typography>
                </CardContent>
                </CardActionArea>
            </Link>
            </Card>


            <Card style={card2Style} sx={{ maxWidth: 345 }}>
            <Link className='' to="/receptionistLogin">
            <CardActionArea>
                <CardMedia
                sx={{ height: 140 }}
                image="../images/view.jpg"
                // title="green iguana"
                />
                <CardContent>
                <Typography align="center" gutterBottom variant="h5" component="div">
                    Receptionist
                </Typography>
                </CardContent>
                </CardActionArea>
            </Link>
            </Card>


            <Card style={card2Style} sx={{ maxWidth: 345 }}>
            <Link className='' to="/adminLogin">
            <CardActionArea>
                <CardMedia
                sx={{ height: 140 }}
                image="../images/view.jpg"
                // title="green iguana"
                />
                <CardContent>
                <Typography align="center" gutterBottom variant="h5" component="div">
                    Admin
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
