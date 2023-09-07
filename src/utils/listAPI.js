import axios from "axios";

const listAPI = async (api, token) => {
    const options = {
        headers: {'Authorization': `bearer ${token}`}, 
    };
    
    const { data } = await axios.get(`http://127.0.0.1:8000/api-root/${api}/`, options);
    // console.log(data);
    return data;
}

export default listAPI;