function Contact(props) {
    return ( <div className="row p-md-2 mb-2" style={{
    borderRadius:"20px",backgroundColor:"#555"}}>
<div className="col-2 pt-2"> <img
  src={`https://ui-avatars.com/api/?name=${props.contact.name}`}
  style={{ width: "80%" }}
  alt="Avatar"
/></div>
<div className="col-4 text-warning pt-0">
    <span className="h4">{props.contact.name}</span>
    <br/>
    <div className="text-white-50">
       {props.contact.phone} 
        <br/>
       {props.contact.email}
    </div>
</div>
<div className="col-1 pt-2">
    <button onClick={() => props.favoriteClick(props.contact)} className={`btn btn-sm m-1 ${props.contact.isFavorite ? "btn-warning" : "btn-outline-warning"}`}>
        <i className="bi bi-star-fill"></i>
    </button>
</div>.
<div className="col-3 pt-2">
    <button onClick={() =>props.contactUpdate(props.contact)} className="btn btn-info btn-sm m-1">
        <i className="bi bi-pencil-square"></i>
    </button>

    <button onClick={() => props.deleteClick(props.contact.id)} className="btn btn-danger btn-sm m-1">
        <i className="bi bi-trash-fill"></i>
    </button>
</div>
    </div> );
}

export default Contact;