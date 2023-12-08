import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login(props){
    const [uid,setUid] = useState("");
    const [password,setPassword] = useState("");
    const [result,setResult ] = useState("");

    const nagivation = useNavigate();
    // we also need to retrive the query param
    const location =useLocation();


    function CheckCredential(){
        const queryParam = location.search
            console.log("query param :"+queryParam);
            // this will give /returnUrl=/emp
            let url = new URLSearchParams(queryParam).get("returnUrl");
            console.log("url :::"+url);
            if(url=='/' || url=='undefined' || url==null){
               url='/';
            } 
        if(uid=='admin' && password=='aamir@123'){
            // if credential are valid.
            const accessToken = generateAccessToken();
            //put accessToken in session 
            sessionStorage.setItem('access-token',accessToken);
            nagivation(url);
        }else{
            setResult("Invalid Credential Please try again......")
        }

    }
    function generateAccessToken(){
        return Math.random().toString(36).slice(2);
    }


    return(
       <div >
           Enter Uname:<input type="text" placeholder="Please enter user Name" onChange={(event)=>setUid(event.target.value)}></input><br></br>
           Enter Password:<input type="password" placeholder="Please enter user Name" onChange={(event)=>setPassword(event.target.value)}></input><br></br>
           <input type="Button" onClick={CheckCredential} value="Login"></input>
           <div>
               {result}
           </div>
       </div>
    );
}  