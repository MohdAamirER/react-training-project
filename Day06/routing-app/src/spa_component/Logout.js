import { useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";

export default function Logout( ){

    const navigate = useNavigate();

    useEffect(()=>{
        invalidateAccessToken();
    },[])
    function invalidateAccessToken(){
     // set the access token as null,
     // route to home page.
     sessionStorage.setItem('access-token','');

    }

return(
    <div>
        <img  src="/image/logout-screen.png" width="30%" height="50%"></img>
        <div>
        <Link to="/Login" >Login Again ?</Link>
        </div>
        
    </div>
);

}