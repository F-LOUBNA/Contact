import axios from "axios";
const getRandomUser = async() =>{
    const url = new URL ("https://randomuser.me/api/");
    const response = await axios.get(url);
//     if(!response.ok){
//         throw new Error(`Http error ! Status :${response.status}`);
//     }
// const data = await response.json();
return response.data;
};
export default getRandomUser;