import './App.css'
import AODashboard from './Components/AODashboard';
import Login from './Components/Login'
import HODDashboard from './Components/HODDashboard';
import Employ from './Components/Employ';
import {Routes , Route} from 'react-router-dom'; 



function App() {
  return (
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/AODashboard" element={<AODashboard/>}></Route>
          <Route path="/HODDashboard" element={<HODDashboard/>}></Route>
          <Route path="/Employ" element={<Employ/>}></Route>
          
        </Routes>
        
  )
}

export default App
