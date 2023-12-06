import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function HdfcBank(props){

    const[amount,setAmount]= useState(0); 
     const currentBalance =  useSelector((state )=>state.balance);
     const dispatcher = useDispatch();

     function depositAmount(){
      //dispatch the action and the amount which user is filed.
      dispatcher({type:"Deposit",amount});
      setAmount(0);
     }

     function withdrawAmount(){
     dispatcher({type:"Withdraw",amount});
     setAmount(0);
     }
 
     return(
         <>
         <h2>State Management Application Using Redux Hooks</h2>
         Current Balance is :{currentBalance}<br></br>
         Enter Amount: <input placeholder="Please enter Amount" onChange={(event)=>setAmount(event.target.value)}></input>
         <input type="Button" value="Deposit" onClick={depositAmount}></input>
         <input type="Button" value="Withdraw" onClick={withdrawAmount}></input>
         </>
     );

}

export default HdfcBank;