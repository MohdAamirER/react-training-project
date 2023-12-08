import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function ProtectedRouting(props){

    const navigating =useNavigate();
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    function checkAccessToken(){
        const returnUrl= props.returnUrl;
        //get the access token from session storage.
        const accessToken = sessionStorage.getItem('access-token');
        if(accessToken==null || accessToken=='undefined' || accessToken==''){
            //user is not logged in.
            setIsLoggedIn(false);
            //render user to login page.
            return navigating('/Login?returnUrl='+returnUrl);
        }
        
        setIsLoggedIn(true);
    }

    useEffect(()=>{
        //this will load at the time of component rendering and when the isLoggedIn state change.
        checkAccessToken();
    },[isLoggedIn])

    return (
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );


}