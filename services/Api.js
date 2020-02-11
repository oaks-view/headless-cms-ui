import axios from 'axios';


export default function Api(baseURL = 'http://127.0.0.1:3000') {   
    const api = axios.create({
        baseURL
    });
 
    api.defaults.headers.common['Content-Type'] = 'Application/json';
    api.defaults.timeout = 60000;

    api.interceptors.response.use((response) => {
        return Promise.resolve(response.data);
    }, function handleApiResponseError(resError) {
        console.log(resError.message);
        console.log(resError);
        return Promise.reject(resError.response.data);
    });

    return api;
}