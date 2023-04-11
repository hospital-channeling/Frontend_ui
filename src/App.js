import './App.css';
// import Appbar from './components/Appbar';
// import PatientRegistration from './useractions/PatientRegistration';
// import Tabpanel from './components/Tabpanel.tsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import UpdatePatient from './useractions/UpdatePatient';
// import DeletePatient from './useractions/DeletePatient';
// import GetPatient from './useractions/GetPatientDetails';
import Login from './login&signup/login';
import Signup from './login&signup/signup';
// import DeletePatient from './useractions/DeletePatient';

function App() {
  return (
    <div className="App">
      {/* <Router>
      <Appbar/>

      <Routes>
        <Route exact path='/' element={<Tabpanel/>}/>
        <Route exact path='/addPatient' element={<PatientRegistration/>}/>
        <Route exact path='/updatePatient' element={<UpdatePatient/>}/>
        <Route exact path='/deletePatient' element={<DeletePatient/>}/>
        <Route exact path='/viewPatient' element={<GetPatient/>}/>
      </Routes>
      </Router> */}

      <Router>

      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/signup.js' element={<Signup/>}/>
      </Routes>

      </Router>
      
    </div>
  );
}

export default App;
