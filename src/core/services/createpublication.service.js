import http from "./http-common"

class CreatepublicationServices {
    postNewPublication(data){
       return http.post("/publications",data);
    }
}

export default new CreatepublicationServices();