import http from "./http-common"

class UsersService {

    currentUser=0;

    getAllUsers(){
        return http.get('/users');
    }
    getUsersById(index){
        return http.get('/users/'+ index);
    }
    updateUserById(id,data){
        return http.put(`/users/${id}`,data);
    }

}

export default new UsersService();
