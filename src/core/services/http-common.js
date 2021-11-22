import axios from "axios";

export default axios.create({
    baseURL: "https://tf-last-version-backend.azurewebsites.net",
    headers:{Authorization: localStorage.getItem('token')}
});