import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './vehicle_registration_form_using_redux.css';

function VehicleRegistrationFormRedux(){
    const {register,handleSubmit,formState:{errors}} = useForm();
    const [result,setResult] = useState("");
    return(
        <>
        <h2>Vehicle Registration Form Using Redux</h2>
        <form onSubmit={handleSubmit(()=>setResult("Form Submitted"))}>
        <fieldset>
            <legend>Please Fill Below Mandatory Details</legend>
            Owner Name: <input {...register('ownerName' ,{required:true})}></input>
            {errors.ownerName && <span class="error">Owner Name is Mandatory</span>}<br/>
            Contact Number: <input {...register("contactNumber",{required:true,pattern:'^[789]{1}[0-9]{9}',maxLength:10})}></input>
            {errors.contactNumber && errors.contactNumber.type==="required" && <span class="error">Contact Number is Mandatory</span>}
            {errors.contactNumber && errors.contactNumber.type==="max" && <span class="error_green">Contact Number should be in 10 digit only</span>}
            {errors.contactNumber && errors.contactNumber.type==="pattern" && <span class="error">Please provide valid Contact Number</span>}<br/>
            Vehicle Model:<input {...register("vehicleModel",{required:true})}></input>
            {errors.vehicleModel && errors.vehicleModel.type==="required" && <span class="error">Vehicle Model is Mandatory</span>}<br/>
            Registration Number: <input {...register("registrationNumber",{required:true,pattern:"[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$"})}></input>
            {errors.registrationNumber && errors.registrationNumber.type==="required" && <span class="error">Registration Number is Mandatory</span>}
            {errors.registrationNumber && errors.registrationNumber.type==="pattern" && <span class="error">Please provide Valid Registration Number.</span>}<br/>
            Vehicle Color: <input {...register("vehicleColor",{required:true})}></input>
            {errors.vehicleColor && errors.vehicleColor.type==="required" && <span class="error">Vehicle Color is Mandatory</span>}
        </fieldset>
         <input type="submit" value="Register"></input>
        </form>
        {result}
        </>
    );

}
export default VehicleRegistrationFormRedux;