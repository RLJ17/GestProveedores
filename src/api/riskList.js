import axios from 'axios'
import Cookies from 'js-cookie';
axios.defaults.withCredentials = true;

const URIBase = 'http://127.0.0.1:3000/'
const URI = 'http://127.0.0.1:3000/entidad/'

const get = async (endpoint) => {
    const token = Cookies.get('riskToken');
    console.log("risk",token)
    const authHeader = token ? { 'Authorization': `Bearer ${token}` } : {};
    try {
        const url = URI.concat(endpoint);
        return await axios.get(url, {
            withCredentials: true,
            headers: authHeader
        });
    } catch(err) {
        console.error(err);
        return null;
    }
}

const post = async (endpoint, payload) => {
    const token = Cookies.get('riskToken');
    const authHeader = token ? { 'Authorization': `Bearer ${token}` } : {};
    try {
        const url = URIBase.concat(endpoint);
        return await axios.post(url, payload, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                ...authHeader
            }
        });
    } catch(err) {
        console.error(err);
        return null;
    }
}

const base = {get, post};

export default base;