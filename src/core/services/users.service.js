import http from "./http-common"

class UsersService {

    currentUser=0;

    storageUser = -1

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
