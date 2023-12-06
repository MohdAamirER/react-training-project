import{useEffect,useRef,useState} from 'react';
import "./vehicle_registration_form_manual.css"
 function VehicleRegistrationForm(){

    const inputRef =useRef(null);

    const [ownerName,setOwnerName] = useState("");
    const [contactNumber,setContactNumber] = useState("");
    const [vehicleModel,setVehicleModel] = useState("");
    const [registrationNumber,setRegistrationNumber] = useState("");
    const [vehicleColor,setVehicleColor] = useState("");
    const [errorObject,SetErrorObject] = useState({
        ownerName:"",
        contactNumber:"",
        vehicleModel:"",
        registrationNumber:"",
        vehicleColor:""
    });
    const [result,setResult] = useState("");
    
    useEffect(()=> {inputRef.current.focus()},[]);


    function submitButton(event){
        // stop default submit button.
        event.preventDefault();

        //create regex for mobile validation.
        const mobileNumberValidationRegex= RegExp("^[789]{1}[0-9]{9}");
        // create regex to validate registration Number.
        const registrationNumberValidationRegex = RegExp("[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$");
        
        // check error validation.
        //create temp Error object.
        let tempErrorObject = Object.assign({},errorObject);
        tempErrorObject.ownerName = ownerName.length==0?"Please provide Owner Name":"";
        tempErrorObject.contactNumber = contactNumber.length==0?"Please provide Contact Number":"";
        tempErrorObject.contactNumber = mobileNumberValidationRegex.test(contactNumber)?"":"Please enter valid Contact Number";
        tempErrorObject.registrationNumber = registrationNumberValidationRegex.test(registrationNumber)?"":"Please enter Valid Registration Number.";
        tempErrorObject.vehicleModel = vehicleModel.length==0?"Please enter Vehicle Model":"";
        tempErrorObject.vehicleColor = vehicleColor.length==0?"Please enter Vehicle Color":"";
        
      //  set it to useState hook.
      SetErrorObject(tempErrorObject);

      // check if we have any error.
      //gettig values of the object.
      let values = Object.values(tempErrorObject);
      // find whether we have any error or not.
      let valueIndex = values.find(item=>item.length!=0);

      // if there is no error the valueIndex will be -1 

      if(valueIndex==-1){
          setResult("Data is valid!")
      }else {
        setResult("Enter data is invalid Please check!")
      }
    }

    return(
        <>
        <h2>Vehicle Registration Form</h2>
        <form onSubmit={submitButton}>
        <fieldset>
            <legend>Please Fill All the Mandatory Details</legend>
            Owner Name :<input name='ownerName' ref={inputRef} onChange={(event)=>setOwnerName(event.target.value)}></input>
            <span class='error'>{errorObject.ownerName}</span><br/>
            Contact Number :<input name='contactNumber' onChange={(e)=>setContactNumber(e.target.value)}></input>
            <span class='error'>{errorObject.contactNumber}</span><br/>
            Registration Number :<input name='registrationNumber' onChange={(e)=>setRegistrationNumber(e.target.value)}></input>
            <span class='error'>{errorObject.registrationNumber}</span><br/>
            Vehicle Model :<input name='vehicleModel' onChange={(e)=>setVehicleModel(e.target.value)}></input>
            <span class='error'>{errorObject.vehicleModel}</span><br/>
            Vehicle Color :<input name='vehicleColor' onChange={(e)=>setVehicleColor(e.target.value)}></input>
            <span class='error'>{errorObject.vehicleColor}</span><br/>
            <input type="submit" value="Register"></input><br/>

            
        </fieldset>
        </form>
        </>
    );



 }
 export default VehicleRegistrationForm; 