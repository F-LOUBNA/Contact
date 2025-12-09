import { useState } from "react";
import FavoriteContact from "./FavoriteContact";
import GeneralContact from "./GeneralContact";
import AddContract from "./AddContract";
import AddRandomContact from "./AddRandomContact";

function ContactIndex() {
    const [contactList, setContactList]=useState([
        {
            id: 1,
            name: "test front",
            phone: "666-666-6667",
            email:"test1@gmail.com",
            isFavorite: true,
        },
           {
            id: 2,
            name: "test react",
            phone: "666-666-7777",
            email:"test2@gmail.com",
            isFavorite: true,
        },
           {
            id: 3,
            name: "test js",
            phone: "666-666-888",
            email:"test3@gmail.com",
            isFavorite: false,
        },
    ])
    function handleToggleFavorite(contact){
        
        setContactList(prevState => {
            return prevState.map((obj) =>{
                if(obj.id == contact.id){
                    return { ...obj,isFavorite: !obj.isFavorite};
                }
                return obj;
            });
        });
    }
     function handleAddContact(newContact){
        const duplicateRecord=contactList.filter((x)=>{
            if(x.name == newContact.name && x.phone==newContact.phone){
                return true;
            }
        });
          if(duplicateRecord.length>0){
            return{
                status:"error", msg:"Duplicate record."
            };
        }
      
        const newFinalContact={
            ...newContact,
            id: contactList.length > 0 ? contactList[contactList.length -1].id + 1:1,
            isFavorite: false
        };
        setContactList(prevContact => {
return prevContact.concat([newFinalContact]);
        });   
        return {status:"success", msg:"Contact was added successfully."}
    }
     function deleteContact(contractId){
        setContactList(prevState => {
            return prevState.filter((obj) =>{
                if(obj.id !== contractId){
                    return true;
                }
                return false;
            });
        });
     }
      function handleUpdateContactButt(contact){
        setContactList(prevState => {
         return prevState.map((obj)=>{
            if(obj.id== contact.id){
                return{...obj,
                name : contact.name,
                email : contact.email,
                phone : contact.name,
}
            }
return obj;
         });
        });
        setIsUpdating(false);
        setSelectedContact(null);
        return {status:"success", msg:"Contact was updated successfully."};
     }
     const [selectedContact,setSelectedContact] = useState(null);
     const [isUpdating,setIsUpdating] = useState(false);

   function handleContactUpdate(contact){
      setIsUpdating(true);
      setSelectedContact(contact);
    }
     function removeAll() {
        setContactList([]
        );
     }
     function cancelUpdate() {
        setIsUpdating(false);

     }
    function handleToggleFavorite(contact){
        
        setContactList(prevState => {
            return prevState.map((obj) =>{
                if(obj.id == contact.id){
                    return { ...obj,isFavorite: !obj.isFavorite};
                }
                return obj;
            });
        });
    }
     function handleAddRandonContact(newContact){
      
        const newFinalContact={
            ...newContact,
            id: contactList.length > 0 ? contactList[contactList.length -1].id + 1:1,
            isFavorite: false
        };
        setContactList(prevContact => {
return prevContact.concat([newFinalContact]);
        });   
        return {status:"success", msg:"Contact was added successfully."}
    } 
    
    return ( <div className="container" style={{minHeight: "85vh",backgroundColor:"#323637"}}>
        <div className="row py-3">
           <div className="row py-2">
             <div className="col-6 text-white-50">
            <AddRandomContact handleAddRandonContact={handleAddRandonContact}/></div>
            <div className="col-6 text-white-50">
            <button className="btn btn-danger form-control" onClick={removeAll}> Remove all</button></div>
           </div>
           <div className="py-2">
            <div className="col-12">
            <AddContract handleUpdateContact={handleUpdateContactButt} handleAddContact={handleAddContact} selectedContact={selectedContact} cancelUpdate={cancelUpdate} isUpdating={isUpdating}/></div>
           </div>
           <div className="py-2">
            <div className="col-12">
            <FavoriteContact contactUpdate={handleContactUpdate} favoriteClick={handleToggleFavorite} deleteClick={deleteContact} contacts={contactList.filter((u)=>u.isFavorite==true)}/>
            </div>
           </div>
           <div className="py-2">
            <div className="col-12">
            <GeneralContact contactUpdate={handleContactUpdate} favoriteClick={handleToggleFavorite} deleteClick={deleteContact} contacts={contactList.filter(u=>u.isFavorite==false)}/></div>
           </div>
        </div>
    </div> );
}

export default ContactIndex;