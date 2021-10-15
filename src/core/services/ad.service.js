import http from "./http-common"

class AddServices {
    postNewAd(data){
        return http.post("/ads",data);
    }
    getAllAds(){
        return http.get("/ads/");
    }
    getAdById(id){
        return http.get(`/ads/${id}`);
    }
    getDiscountedAdds(){
        return http.get("/ads?promoted=true")
    }

    UpdateAd(id,data){
        return http.put(`/ads/${id}`,data);
    }
    DeleteAd(id)
    {
        return http.delete(`/ads/${id}`);
    }
}

export default new AddServices();
