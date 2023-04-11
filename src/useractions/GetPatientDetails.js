import * as React from 'react';
import { useState } from "react";
import axios from "axios";




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

export default function GetPatient() {

    const [patient, setPatient] = useState([]);

    React.useEffect(() =>{
        loadPatientDetails();
    },[]);

    const loadPatientDetails=async()=>{
        const result = await axios.get("http://localhost:8080/api/patient/getPatient")
        setPatient(result.data);
    }


  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Address</th>
            <th scope="col">Age</th>
            <th scope="col">Birthdate</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {
                patient.map((patient,index)=>(
                    <tr>
                    <th scope="row" key={index}>{index+1}</th>
                    <td>{patient.first_name}</td>
                    <td>{patient.last_name}</td>
                    <td>{patient.address}</td>
                    <td>{patient.age}</td>
                    <td>{patient.birthdate}</td>
                    <td>{patient.gender}</td>
                    <td>{patient.email}</td>
                    <td>{patient.contact}</td>
                    <td>
                        <button className='btn btn-primary mx-2' href="/viewPatient">View</button>
                        <button className='btn btn-outline-primary mx-2' href="/updatePatient">Edit</button>
                        <button className='btn btn-danger mx-2' href="/deletePatient">Delete</button>
                    </td>
                    </tr>
                ))
            }
        
        </tbody>
        </table>
        </div>

    </div>
  )
}
