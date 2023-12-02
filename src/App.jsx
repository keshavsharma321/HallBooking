import './App.css'
import AODashboard from './Components/AODashboard';
import Login from './Components/Login'
import HODDashboard from './Components/HODDashboard';
import Employ from './Components/Employ';
import {Routes , Route} from 'react-router-dom'; 
import Commen from './Components/Commen';
import AOBookings from './Components/AOBookings';
import AONBookings from './Components/AONBookings';



function App() {
  return (
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/AODashboard" element={<AODashboard/>}></Route>
          <Route path="/HODDashboard" element={<HODDashboard/>}></Route>
          <Route path="/Employ" element={<Employ/>}></Route>
          <Route path="/Commen" element={<Commen/>}></Route>
          <Route path="/AOBookings" element={<AOBookings/>}></Route>
          <Route path="/AONBookings" element={<AONBookings/>}></Route>
        </Routes>
        
  )
}

export default App
