import './App.css';
import Appbar from './components/Appbar';
import PatientRegistration from './components/PatientRegistration';
import Tabpanel from './components/Tabpanel.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpdatePatient from './components/UpdatePatient';
import DeletePatient from './components/DeletePatient';
import GetPatient from './components/GetPatientDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Appbar/>

      <Routes>
        <Route exact path='/' element={<Tabpanel/>}/>
        <Route exact path='/addPatient' element={<PatientRegistration/>}/>
        <Route exact path='/updatePatient' element={<UpdatePatient/>}/>
        <Route exact path='/deletePatient' element={<DeletePatient/>}/>
        <Route exact path='/viewPatient' element={<GetPatient/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
