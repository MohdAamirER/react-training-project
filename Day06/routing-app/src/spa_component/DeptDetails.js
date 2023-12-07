import { useParams } from "react-router-dom";
import deptService from "./service.js/DeptService";

export default function DeptDetails(){
    const {deptId} =useParams();
    console.log("deptId"+deptId);
    const deptList = deptService.getAllDepartments();
    const deptDetails = deptList.find((item)=>item.deptId==deptId);
   console.log("dept Details:"+deptDetails);
    return(
        <div>
        <h2 style={{'color':'red'}}>Selected Department Details:</h2>
        <table>
            <tr>
                <td>Department No:</td>
                <td>{deptDetails.deptId}</td>
            </tr>
            <tr>
                <td>Department Name:</td>
                <td>{deptDetails.dname}</td>
            </tr>
            <tr>
                <td>Department Code:</td>
                <td>{deptDetails.code}</td>
            </tr>
            
        </table>
        </div>
    );

} 