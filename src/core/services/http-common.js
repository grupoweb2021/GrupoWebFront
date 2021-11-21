import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:5001",
    headers:{Authorization: localStorage.getItem('token')}
});