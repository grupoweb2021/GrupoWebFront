import http from "./http-common"
import axios from 'axios';
import authHeader from "../services/authHeader"
const API_URL = 'https://localhost:5001/api/v1/users';


class UsersService {

    currentUser=0;
    test=0;
    storageUser = JSON.parse(localStorage.getItem('user')).id

    getAll() {
        console.log(authHeader())
        return axios.get(API_URL);
    }
    getAllUsers(){
        return http.get(API_URL);
    }

    async getUsersById(index){
        return await http.get(`https://localhost:5001/api/v1/users/${index}`)
    }

    async updateUserById(id,data){
        return await http.put(`https://localhost:5001/api/v1/users/${id}`,data);
    }
    login(user, password){
        return http.get(`${API_URL}?user=${user}&&password=${password}`);
    }
    postUser(data){
        return http.post(`${API_URL}`, data)
    }
    saveIdActual(data)
    {
        this.currentUser=data
        this.test=data
    }

    getIDActual()
    {
         console.log(this.test)
    }
}

export default new UsersService();
