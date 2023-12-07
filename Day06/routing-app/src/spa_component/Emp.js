import { Link } from "react-router-dom";
import empService from "./service.js/EmpService";

export default function Emp(){

const empList = empService.getAllEmp();

const result = empList.map((item,index)=>
<tr key={index}>
    <td><Link to={"/EmpDetails/"+item.id}>{item.id}</Link></td>
    <td>{item.ename}</td>
    <td>{item.salary}</td>
    <td><Link to={"/deptDetails/"+item.deptNo}>{item.deptNo}</Link></td>
     </tr>
);
return(
    <div>
    <h2 style={{'align':'center','color':'green'}}>Employee List:</h2>
    <table border={3}>
        <tr>
            <td>Employee No</td>
            <td>Epmloyee Name</td>
            <td>Employee Salary </td>
            <td>Dept No</td>

        </tr>
        {result}
    </table>
    
    
    </div>



);


}