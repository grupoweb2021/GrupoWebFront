import http from "./http-common"

class CreatepublicationServices {
    postNewPublication(data){
       return http.post("/publications",data);
    }
    getAllPublications(){
        return http.get("/publications");
    }

}

export default new CreatepublicationServices();
