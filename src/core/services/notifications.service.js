import http from "./http-common"
import UsersService from "./users.service"
import axios from "axios";
const API_URL = 'https://tf-last-version-backend.azurewebsites.net/api/v1/adoptionsrequests';
class NotificationService {


    getAllUserAtNotifications(id){
        //return http.get(`/adoptionRequests?userIdAt=${UsersService.currentUser}`);
        return axios.get(`https://tf-last-version-backend.azurewebsites.net/api/v1/adoptionsrequests/userIdAt=${id}`);
    }

    postNotification(data){
        //return http.get(`/adoptionRequests?userIdAt=${UsersService.currentUser}`);
        return axios.post(`https://tf-last-version-backend.azurewebsites.net/api/v1/adoptionsrequests`, data);
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
        return axios.put(`https://tf-last-version-backend.azurewebsites.net/api/v1/adoptionsrequests/${id}`,data);

    }

}

export default new NotificationService();
