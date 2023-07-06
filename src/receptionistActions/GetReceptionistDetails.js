import * as React from 'react';
import { useState } from "react";
import axios from "axios";
import ScrollingPaper from '../components/ScrollingPaper';
import {Paper} from '@mui/material';
import { Link } from "react-router-dom";



// export default function GetPatient() {
//     const paperStyle={padding:'50px 20px', width:600, margin:'20px auto'}
//     const[firstname, setfirstName]=useState("")
//     const[lastname, setlastName]=useState("")
//     const[address, setAddress]=useState("")
//     const[age, setAge]=useState("")
//     const[birthdate, setBirthdate]=useState("")
//     const[gender, setGender]=useState("")
//     const clickSubmit=(e)=>{
//         e.preventDefault()
//         const patient={firstname,lastname,address,age,birthdate,gender}
//         console.log(patient)
//         fetch("http://localhost:8080/api/patient/getPatient",{
//             method:"GET",
//             headers:{"Content-Type":"application/json"},
//             body:JSON.stringify(patient)
//         }).then(()=>{
//             console.log("Patient details Retrieved")
//         })
//     }
//     const useStyles = makeStyles({
//         table: {
//             minWidth: 650,
//         },
//         });
//         const classes = useStyles();
    
//     function createData(name, calories, fat, carbs, protein) {
//         return { name, calories, fat, carbs, protein };
//     }
    
//     const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//     ];

    
    
//   return (
//     <Container>
//         <Paper elevation={3} style={paperStyle}>
//     <Box component="form" sx={{'& > :not(style)': { m: 1, width: '35ch' },}}
//       noValidate
//       autoComplete="off">
        
//         <h1 color='primary'>PATIENT DETAILS</h1>


//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>

        
      
//     </Box>
//     </Paper>
//     </Container>
//   );
// }

export default function GetReceptionist() {

    const [patient, setPatient] = useState([]);
    const paperStyle={padding:20, margin:'150px 30px'}

    React.useEffect(() =>{
        loadReceptionistDetails();
    },[]);

    const loadReceptionistDetails=async()=>{
        const result = await axios.get("http://localhost:8080/api/receptionist/getReceptionist")
        setPatient(result.data);
    }

    const deleteReceptionist =async (id) =>{
        await axios.delete(`http://localhost:8080/api/receptionist/deleteReceptionistByID/${id}`);
        loadReceptionistDetails();
    }

  return (
    <ScrollingPaper>
        <Paper elevation={10} style={paperStyle}>
        {/* <div className='container'> */}
            <div className='py-4'>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Address</th>
                {/* <th scope="col">Age</th> */}
                <th scope="col">Birthdate</th>
                <th scope="col">Gender</th>
                <th scope="col">Service Start Date</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    patient.map((receptionist,index)=>(
                        <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{receptionist.first_name}</td>
                        <td>{receptionist.last_name}</td>
                        <td>{receptionist.address}</td>
                        {/* <td>{patient.age}</td> */}
                        <td>{receptionist.birthdate}</td>
                        <td>{receptionist.gender}</td>
                        <td>{receptionist.service_start_date}</td>
                        <td>{receptionist.email}</td>
                        <td>{receptionist.contact}</td>
                        <td>
                            <Link to={"/viewReceptionist"} className='btn btn-primary mx-2'>View</Link>
                            <Link to={`/getReceptionistByID/${receptionist.id}`} className='btn btn-outline-primary mx-2'>Edit</Link>
                            <button onClick={()=>deleteReceptionist(receptionist.id)} className='btn btn-danger mx-2' href="/deleteReceptionist">Delete</button>
                        </td>
                        </tr>
                    ))
                }
            
            </tbody>
            </table>
            </div>

        {/* </div> */}
        </Paper>
    </ScrollingPaper>
  )
}
