
const deptService = {
    getAllDepartments
}

function getAllDepartments(){
    return [{
    deptId:10,dname:"HR",code:"HR001"
    },{
        deptId:30,dname:"Finance",code:"FI001"
        },
        {
            deptId:50,dname:"Learning",code:"LR001"
            },
            {
                deptId:80,dname:"Sell",code:"SE001"
                }
    ]
} 
export default deptService;