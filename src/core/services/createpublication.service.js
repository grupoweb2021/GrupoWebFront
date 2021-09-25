import http from "./http-common"

class CreatepublicationServices {
    postNewPublication(data){
       return http.post("/publications",data);
    }
    getAllPublications(index){
        return http.get("/publications/",index);
    }

}

export default new CreatepublicationServices();
