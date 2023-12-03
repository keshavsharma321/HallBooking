import './App.css'
import AODashboard from './Components/AODashboard';
import Login from './Components/Login'
import HODDashboard from './Components/HODDashboard';
import Employ from './Components/Employ';
import {Routes , Route} from 'react-router-dom'; 
import Commen from './Components/Commen';
import AOBookings from './Components/AOBookings';
import AONBookings from './Components/AONBookings';
import HodABookings from './Components/HodABookings';
import HodBookings from './Components/HodBookings';
import HodNBookings from './Components/HodNBookings';
import EmployBookings from './Components/EmployHStatus';
import Employ from './Components/EmployBookHall';
import Profile from './Components/EmployProfile';


function App() {
  return (
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/AODashboard" element={<AODashboard/>}></Route>
          <Route path="/HODDashboard" element={<HODDashboard/>}></Route>
          <Route path="/EmployBookHall" element={<Employ/>}></Route>
          <Route path="/Commen" element={<Commen/>}></Route>
          <Route path="/AOBookings" element={<AOBookings/>}></Route>
          <Route path="/AONBookings" element={<AONBookings/>}></Route>
          <Route path="/HodABookings" element={<HodABookings/>}></Route>
          <Route path="/HodBookings" element={<HodBookings/>}></Route>
          <Route path='/HodNBookings' element={<HodNBookings/>}></Route>
          <Route path='/EmployHStatus' element={<EmployBookings/>}></Route>
          <Route path="/EmployProfile" element={<Profile/>}></Route>
        </Routes>
        
  )
}

export default App
