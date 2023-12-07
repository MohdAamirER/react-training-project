import React from "react";
import { Link, useParams } from "react-router-dom";
import empService from "./service.js/EmpService";
import './EmpDetails.css'

export default function EmpDetails(){
    const {id}=useParams();
    const empList= empService.getAllEmp();

    let empDetails = empList.find((item)=>item.id==id);
     
    return(
    <div >
    <h2 style={{'color':'red'}}>Selected Employee Details:</h2>
    <table border={1} >
        <tr><td>Employee No:</td><td>{empDetails.id}</td></tr>
        <tr><td>Eployee Name:</td><td>{empDetails.ename}</td></tr>
        <tr><td>Employee Salary</td><td>{empDetails.salary}</td></tr>
        <tr><td>Employee Dept :</td><td>{empDetails.deptNo}</td></tr>
    </table>
    <Link to="/emp">Back to Employee</Link> | <Link to="/deptList">Department List</Link>
    </div>
    );

}