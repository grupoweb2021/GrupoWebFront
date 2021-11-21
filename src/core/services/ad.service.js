import http from "./http-common"

class AddServices {
    postNewAd(data){
        return http.post("https://localhost:5001/api/v1/Advertisements",data);
    }
    getAllAds(){
        return http.get("https://localhost:5001/api/v1/Advertisements");
    }
    getAdById(id){
        return http.get(`https://localhost:5001/api/v1/Advertisements/${id}`);
    }
    getDiscountedAdds(){
        return http.get("https://localhost:5001/api/v1/Advertisements?promoted=true");
    }

    UpdateAd(id,data){
        return http.put(`https://localhost:5001/api/v1/Advertisements/${id}`,data);
    }
    DeleteAd(id)
    {
        return http.delete(`https://localhost:5001/api/v1/Advertisements/${id}`);
    }
    getAllByUserId(id){
        return http.get(`https://localhost:5001/api/v1/Users/${id}/Advertisements`);
    }
}

export default new AddServices();
