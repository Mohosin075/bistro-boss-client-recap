import axios from "axios";


const axiosPublic = axios.create({
    baseURL : 'https://bistro-boss-recap-server-lake.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;