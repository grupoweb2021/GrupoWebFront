import http from "./http-common"
import UsersService from "./users.service"
class NotificationService {


    getAllUserAtNotifications(){
        return http.get(`/adoptionRequests?userIdAt=${UsersService.currentUser}`);
    }
    getAllUserFromNotifications(){
        return http.get(`/adoptionRequests?userIdFrom=${UsersService.currentUser}`);
    }
    deleteNotification(id){
        return http.delete(`/adoptionRequests/${id}`);
    }
    getUsersById(index){
        return http.get('/users/'+ index);
    }
    updateNotification(id,data){
        return http.put(`/adoptionRequests/${id}`,data);
    }

}

export default new NotificationService();
