import axios from "axios";

class AddServices {
    postNewAd(data){
        return axios.post("https://tf-last-version-backend.azurewebsites.net/api/v1/Advertisements",data);
    }
    getAllAds(){
        return axios.get("https://tf-last-version-backend.azurewebsites.net/api/v1/Advertisements/");
    }
    getAdById(id){
        return axios.get(`https://tf-last-version-backend.azurewebsites.net/api/v1/Advertisements/${id}`);
    }
    getDiscountedAdds(){
        return axios.get("https://tf-last-version-backend.azurewebsites.net/api/v1/Advertisements/promoted=true")
    }
    UpdateAd(id,data){
        return axios.put(`https://tf-last-version-backend.azurewebsites.net/api/v1/Advertisements/${id}`,data);
    }
    DeleteAd(id)
    {
        return axios.delete(`https://tf-last-version-backend.azurewebsites.net/api/v1/Advertisements/${id}`);
    }
    getAllByUserId(id){
        return axios.get(`https://tf-last-version-backend.azurewebsites.net/api/v1/users/${id}/Advertisements`)
    }
}

export default new AddServices();
