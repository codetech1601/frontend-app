 import { useState } from "react";
    
 
 const UserForm=()=> {

const [name,setName]=useState("");
const [password,setPassword]=useState("");

const handleSubmit=async (e)=>{
e.preventDefault();

const response = await fetch("https://backend-app-kffz.onrender.com/save",
  {
    method: "POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,password
    })

  }

);


if(response.ok)
{
  alert("User saved successfully....");
  setName("");
  setPassword("");
}
  else{
    alert("Error saving User...");
}


};

    return(
        
       < div>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={name} onChange={(e)=>{setName(e.target.value)} } required/><br/><br/>
      <input type="text" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)} } required/><br/><br/>
      <input type="submit"/> 
     
    </form>
   
  </div>

    );
 }
 
 

  export default UserForm;