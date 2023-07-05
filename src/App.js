import './App.css';
import Appbar from './components/Appbar';
import PatientRegistration from './useractions/PatientRegistration';
import Tabpanel from './components/Tabpanel.tsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UpdatePatient from './useractions/UpdatePatient';
import DeletePatient from './useractions/DeletePatient';
import ViewPatient from './useractions/ViewPatient';
import GetPatient from './useractions/GetPatientDetails';
import Home from './useractions/Home';
import Login from './login&signup/login';
import Signup from './login&signup/signup';

function App() {
  return (
    <div className="App">

      {/* <Appbar/> */}
      {/* <Home/> */}

      <Router>
      <Appbar/>  
      <Routes>
        <Route exact path='/' element={<GetPatient/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/addPatient' element={<PatientRegistration/>}/>
        <Route exact path='/getUserByID/:id' element={<UpdatePatient/>}/>
        <Route exact path='/deletePatient' element={<DeletePatient/>}/>
        <Route exact path='/getPatient' element={<GetPatient/>}/>
        <Route exact path='/viewPatient' element={<ViewPatient/>}/>
        <Route exact path='/src/useractions/Home.js' element={<Home/>}/> 
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
