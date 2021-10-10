import http from "./http-common"

class AddServices {
    postNewPAdd(data){
        return http.post("/adds",data);
    }
    getAllAdds(){
        return http.get("/adds/");
    }
    getAddById(id){
        return http.get(`/adds/${id}`);
    }

    UpdateAdd(id,data){
        return http.put(`/adds/${id}`,data);
    }
    DeleteAdd(id)
    {
        return http.delete(`/adds/${id}`);
    }
}

export default new AddServices();
