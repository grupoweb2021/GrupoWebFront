import http from "./http-common"

class CreatepublicationServices {
    postNewPublication(data){
       return http.post("/publications",data);
    }
    getAllPublications(index){
        return http.get("/publications/",index);
    }
    getPublicationById(id){
        return http.get(`/publications/${id}`);
    }
    UpdatePublication(id,data){
        return http.put(`/publications/${id}`,data)
    }
    DeletePublication()
    {
        return http.delete(`/publications/${0}`)
    }
}

export default new CreatepublicationServices();
