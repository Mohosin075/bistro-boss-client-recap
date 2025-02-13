import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from './useAuth';


const axiosSecure = axios.create({
    baseURL : 'https://bistro-boss-recap-server-lake.vercel.app'
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useAuth()

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('bistro-access-token')
        // console.log('request stopped by interceptors', token);
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function(error){
        return Promise.reject(error)
    })


    // for 401 and 403 error
    axiosSecure.interceptors.response.use(function(response){
        return response
    }, async(error)=>{
        // console.log('status error in the interceptor', error);
        const status = error.response.status;
        if(status === 401 || status === 403){
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error)
    })

    return axiosSecure
};

export default useAxiosSecure;