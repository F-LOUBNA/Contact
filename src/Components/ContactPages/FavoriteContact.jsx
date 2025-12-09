import Contact from "./Contact";

function FavoriteContact(props) {
    return (<div className="col-12 p-2" style={{borderRadius:"10px",backgroundColor:"#323637"}}> 
    <div className="text-center text-white-50"> FAVORITE CONTACT</div>
<div className="p-2">{props.contacts.map((contact,index)=>(<Contact favoriteClick={props.favoriteClick}
contactUpdate={props.contactUpdate}  deleteClick={props.deleteClick} contact={contact} key={index}/>))}</div>
    </div>  );
}

export default FavoriteContact;