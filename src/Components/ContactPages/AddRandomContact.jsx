import getRandomUser from "../../Utility/api";
function AddRandomContact(props) {

    const getRandomContact = async () => {
        const response = await getRandomUser();
        if(response && response.results && response.results.length >0){
            const user = response.results[0];
            const formattedUser ={
                name : `${user.name.first} ${user.name.last}` ,
                email: user.email,
                phone: user.phone,
            };
                        console.log(formattedUser);
                        props.handleAddRandonContact(formattedUser);

        }
    };

    return ( <button className="btn btn-success form-control"  onClick={getRandomContact}>
        Add random contact</button> );
}

export default AddRandomContact;