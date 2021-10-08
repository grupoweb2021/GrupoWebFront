import http from "./http-common"

class PetsService {
    getPets(userId){
        return http.get(`/pets?userId=${userId}`);
    }
    deletePet(petId)
    {
        return http.delete(`/pets/${petId}`);
    }
    postPet(data)
    {
        return http.post(`/pets`, data);
    }
    putPet(id, data)
    {
        return http.put(`/pets/${id}`, data);
    }
}

export default new PetsService();
