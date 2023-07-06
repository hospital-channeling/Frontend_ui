import './App.css';
import PatientRegistration from './patientActions/PatientRegistration';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UpdatePatient from './patientActions/UpdatePatient';
import DeletePatient from './patientActions/DeletePatient';
import ViewPatient from './patientActions/ViewPatient';
import GetPatient from './patientActions/GetPatientDetails';
import PatientHome from './patientActions/PatientHome';

import ReceptionistHome from './receptionistActions/ReceptionistHome';
import AddReceptionist from './receptionistActions/AddReceptionist';
import GetReceptionist from './receptionistActions/GetReceptionistDetails';
import UpdateReceptionist from './receptionistActions/UpdateReceptionist';
import ViewReceptionist from './receptionistActions/ViewReceptionist';

import DoctorHome from './doctorActions/DoctorHome';
import AddDoctor from './doctorActions/AddDoctor';
import GetDoctor from './doctorActions/GetDoctor';
import UpdateDoctor from './doctorActions/UpdateDoctor';
import ViewDoctor from './doctorActions/ViewDoctor';

import UserSelectionPage from './UserSelection/UserSelectionPage';

import AdminHome from './adminActions/AdminHome';

import AdminLogin from './login&signup/AdminLogin';

import PatientLogin from './login&signup/PatientLogin';
import PatientSignup from './login&signup/PatientSignup';
import DoctorLogin from './login&signup/DoctorLogin';
import DoctorSignup from './login&signup/DoctorSignup';
import ReceptionistLogin from './login&signup/ReceptionistLogin';
import ReceptionistSignup from './login&signup/ReceptionistSignup';

function App() {
  return (
    <div className="App">

      {/* <Appbar/> */}
      {/* <Home/> */}

      <Router>
      <Routes>

        <Route exact path='/' element={<GetPatient/>}/>
        <Route exact path='/home' element={<PatientHome/>}/>
        <Route exact path='/addPatient' element={<PatientRegistration/>}/>
        <Route exact path='/getUserByID/:id' element={<UpdatePatient/>}/>
        <Route exact path='/deletePatient' element={<DeletePatient/>}/>
        <Route exact path='/getPatient' element={<GetPatient/>}/>
        <Route exact path='/viewPatient' element={<ViewPatient/>}/>
        <Route exact path='/src/useractions/Home.js' element={<PatientHome/>}/> 

        <Route exact path='/homeReceptionist' element={<ReceptionistHome/>}/>
        <Route exact path='/addReceptionist' element={<AddReceptionist/>}/>
        <Route exact path='/getReceptionist' element={<GetReceptionist/>}/>
        <Route exact path='/updateReceptionist' element={<UpdateReceptionist/>}/>
        <Route exact path='/viewReceptionist' element={<ViewReceptionist/>}/>

        <Route exact path='/homeDoctor' element={<DoctorHome/>}/>
        <Route exact path='/addDoctor' element={<AddDoctor/>}/>
        <Route exact path='/getDoctor' element={<GetDoctor/>}/>
        <Route exact path='/updateDoctor' element={<UpdateDoctor/>}/>
        <Route exact path='/viewDoctor' element={<ViewDoctor/>}/>

        <Route exact path='/adminHome' element={<AdminHome/>}/>

        <Route exact path='/userSelection' element={<UserSelectionPage/>}/>

        <Route exact path='/patientLogin' element={<PatientLogin/>}/>
        <Route exact path='/patientSignup' element={<PatientSignup/>}/>

        <Route exact path='/doctorLogin' element={<DoctorLogin/>}/>
        <Route exact path='/doctorSignup' element={<DoctorSignup/>}/>

        <Route exact path='/receptionistLogin' element={<ReceptionistLogin/>}/>
        <Route exact path='/receptionistSignup' element={<ReceptionistSignup/>}/>

        <Route exact path='/adminLogin' element={<AdminLogin/>}/>

       </Routes>
      </Router>

      {/* <Router>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/signup.js' element={<Signup/>}/>
      </Routes>
      </Router> */}
      
    </div>
  );
}

export default App;
