import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route,Routes,Link,BrowserRouter as Router } from 'react-router-dom';
import AboutUs from './spa_component/AboutUs';
import ContactUs from './spa_component/ContactUs';
import Emp from './spa_component/Emp';
import EmpDetails from './spa_component/EmpDetails';
import DeptList from './spa_component/DeptList';
import DeptDetails from './spa_component/DeptDetails';
import PageNotFound from './spa_component/PageNotFound';
import ProtectedRouting from './spa_component/ProtectedRouting';
import Login from './spa_component/Login';
import Logout from './spa_component/Logout';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = (
  <Router>
 <Link to='/'>Home</Link> | 
 <Link to="/aboutUs">About Us</Link> | 
 <Link to="/contact">Contact Us</Link> |
 <Link to="/emp">Employees</Link> |
 <Link to="/deptList">Departments</Link> |
 <Link to="/Login"></Link> 
 <Link to="/invalid">Invalid</Link> | 
 <Link to="/logout">Logout</Link>
 
 <Routes>
   <Route path='/' element={<App/>}></Route>
   <Route path='/aboutUs' element={<AboutUs/>}></Route>
   <Route path='/contact' element={<ContactUs/>}></Route>
   <Route path='/emp' element={
    <ProtectedRouting returnUrl="/emp">
      <Emp></Emp>
    </ProtectedRouting>
   }></Route>
   <Route path='/EmpDetails/:id' element={<EmpDetails/>}></Route>
   <Route path="/deptList" element={<DeptList/>}></Route>
   <Route path="/deptDetails/:deptId" element={<DeptDetails/>}></Route> 
   <Route path="/Login" element={<Login/>}></Route>
   <Route path="*" element={<PageNotFound/>}></Route>
   <Route path="/logout" element={<Logout></Logout>}></Route>
 </Routes>

  </Router>
);
root.render(
  <React.StrictMode>
    {router}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
