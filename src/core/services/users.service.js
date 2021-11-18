import http from "./http-common"
import axios from 'axios';
import authHeader from "../services/authHeader"
const API_URL = 'https://localhost:5001/api/users';

class UsersService {

    currentUser=0;

    storageUser = -1


    getAll() {
        console.log(authHeader())
        return axios.get(API_URL, { headers: authHeader()});
    }

    getAllUsers(){
        return http.get('/users');
    }
    getUsersById(index){
        return http.get('/users/'+ index);
    }
    updateUserById(id,data){
        return http.put(`/users/${id}`,data);
    }
    login(user, password){
        return http.get(`/users?user=${user}&&password=${password}`);
    }
    postUser(data){
        return http.post('/users', data)
    }
}

export default new UsersService();
