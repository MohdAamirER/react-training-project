import React from "react";
import { Link } from "react-router-dom";
import deptService from "./service.js/DeptService";

export default function DeptList(){

const deptList = deptService.getAllDepartments();
const result = deptList.map((item,index)=>
    <tr key={index}>
        <td><Link to={"/deptDetails/"+item.deptId}>{item.deptId}</Link></td>
        <td>{item.dname}</td>
        <td>{item.code}</td>
    </tr>
);
return(
    <div>
        <h2 style={{'color':'purple'}}>Department List:</h2>
        <table border={3}>
        <tr>
            <td>Dpet No</td>
            <td>Department Name</td>
            <td>Code No</td>

        </tr>
        {result}
    </table>
    </div>
)

}