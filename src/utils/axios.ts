import axios,{Axios} from 'axios';
import { authResponse } from '../types/authResponse';

const axiosInstance = axios.create(
    {
        baseURL:'http://localhost:8000/',
        timeout: 5000,
        maxRedirects: 0,
        timeoutErrorMessage: 'Time out. Please Try again...',
    }
)

axiosInstance.interceptors.request.use(
    function (config){
        const token=sessionStorage.getItem('@app/token');
        if(token) {
            const data:authResponse= JSON.parse(token);
            config.headers={
                ...config.headers,
                Authorization:`Bearer ${data.accessToken}`
            }
        }
        return config;
    },

    function (error) {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) =>{
        return response;
    },

    function (error) {
        if(axios.isAxiosError(error)){
            let message =error.response?.data || error.message;
            if(error.response?.status==401){
                message=401
            }
            return Promise.reject(new Error(message))
        }
        else{
            Promise.reject(error)
        }
    }
)

export default axiosInstance;