import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.withCredentials = true;
const URI = 'https://localhost:7125/api/proveedor/';

const get = async (endpoint) => {
    const token = Cookies.get('jwt');
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
    const token = Cookies.get('jwt');
    const authHeader = token ? { 'Authorization': `Bearer ${token}` } : {};
    try {
        const url = URI.concat(endpoint);
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

const put = async (endpoint, payload) => {
    const token = Cookies.get('jwt');
    const authHeader = token ? { 'Authorization': `Bearer ${token}` } : {};
    try {
        const url = URI.concat(endpoint);
        return await axios.put(url, payload, {
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

const remove = async (endpoint) => {
    const token = Cookies.get('jwt');
    const authHeader = token ? { 'Authorization': `Bearer ${token}` } : {};
    try {
        const url = URI.concat(endpoint);
        return await axios.delete(url, {
            withCredentials: true,
            headers: authHeader
        });
    } catch(err) {
        console.error(err);
        return null;
    }
}

const base = { get, post, put, remove };

export default base;
