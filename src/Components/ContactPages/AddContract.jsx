import { useState,useEffect } from "react";
function AddContract(props) {
const [messages,setMessages]= useState({
    errorMessage: "",
    successMessage: "",
});
useEffect(()=>{
    if(props.isUpdating && props.selectedContact){
    setFormData({
        name: props.selectedContact.name,
        email: props.selectedContact.email,
        phone: props.selectedContact.phone,
    });
    }else{
       setFormData({
      name: "",
      email: "",
      phone: "",
    });  
    }

},[props.isUpdating,props.selectedContact]);
const [formData,setFormData]=useState({
name: "",
email: "",
phone: "",
});
function handleFormInputChange(e){
    setFormData({
        ...formData,
        [e.target.name]:e.target.value,
    });
}

function handleAddContactForm(formData){
    const contactData={
        name: formData.get("name"),
        email:formData.get("email"),
        phone:formData.get("phone"),
    };
    try {
        let response = undefined;
        if(props.isUpdating && props.selectedContact){
           // update
           response = props.handleUpdateContact({
            id: props.selectedContact.id,
            ...contactData,
           })
        }else{
            //create
                     response = props.handleAddContact(contactData);

        }
        if(response.status=="success"){
            setMessages({errorMessage:undefined, successMessage:response.msg })
            if(!props.isUpdating){
                setFormData({
                name: "",
                email: "",
                phone: "",        
             })
            }
        }else{
     setMessages({errorMessage:"error encountered", successMessage:undefined })
 
        }
    } catch (error) {
     console.error("error adding contact", error.message)
          setMessages({errorMessage: error.message, successMessage:undefined })
   
    }
}


    return ( <div className="border col-12 text-white p-2">
<form action={handleAddContactForm}>
    <div className="row p-2">
        <div className="col-12 text-white-50">
        {props.isUpdating ? "Update Contact" :"Add Contact"}
        </div>
<div className="col-12 col-md-4 p-1">
<input name="name" value={formData.name} onChange={handleFormInputChange} placeholder="Name..." className="form-control form-control-sm" style={{backgroundColor:"#b3b8bc"}}/>      
  </div>
  <div className="col-12 col-md-4 p-1">
<input name="email"  value={formData.email} onChange={handleFormInputChange} placeholder="Email..." className="form-control form-control-sm" style={{backgroundColor:"#b3b8bc"}}/>      
  </div>
  <div className="col-12 col-md-4 p-1">
<input name="phone"  value={formData.phone} onChange={handleFormInputChange} placeholder="Phone..." className="form-control form-control-sm" style={{backgroundColor:"#b3b8bc"}}/>      
  </div>
    
  { messages.successMessage  && <div className="col-12 text-center text-success">{ messages.successMessage}</div>}
   {messages.errorMessage  && <div className="col-12 text-center text-danger">{ messages.errorMessage}</div>}
   <div className={`${props.isUpdating ? "col-6" : "col-12"}`}>
<button  className="btn btn-primary btn-sm form-control">
 {props.isUpdating ? "Update" :"Create"}
</button>
   </div>
   { props.isUpdating && <div className="col-6">
<button className="btn btn-danger btn-sm form-control" onClick={()=>props.cancelUpdate()}>
Cancel
</button>
   </div> }
    </div>
</form>
    </div> );
}

export default AddContract;