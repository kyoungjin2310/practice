import axios from 'axios';

const axiosInstans = axios.create({
    baseURL:"http://localhost:8000",
    withCredentials: true
})

export default axiosInstans