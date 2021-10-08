import http from "./http-common"

class UsersService {

    currentUser=0;

    getAllUsers(){
        return http.get('users');
    }
    getUsersById(index){
        return http.get('users', index);
    }
}

export default new UsersService();
