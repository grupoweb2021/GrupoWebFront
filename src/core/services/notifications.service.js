import http from "./http-common"
import UsersService from "./users.service"
const API_URL = 'https://localhost:5001/api/v1/adoptionsrequests';
class NotificationService {


    getAllUserAtNotifications(id){
        //return http.get(`/adoptionRequests?userIdAt=${UsersService.currentUser}`);
        return http.get(API_URL+`/userIdAt=${id}`);

    }
    getAllUserFromNotifications(){
        //return http.get(`/adoptionRequests?userIdFrom=${UsersService.currentUser}`);
        return http.get(API_URL+`/userIdAt=${UsersService.currentUser}`);

    }
    deleteNotification(id){
        //return http.delete(`//adoptionRequests${id}`);
        return http.delete(API_URL+`/userIdAt=${id}`);

    }
    getUsersById(index){
        //return http.get('/users/'+ index);
        return http.get(API_URL+`/userIdFrom=`+index);
    }
    updateNotification(id,data){
        return http.put(API_URL+`/userIdFrom=`+id,data);

    }

}

export default new NotificationService();
