import http from "./http-common";

class PetsService {
  datafilter ;
  getPets(userId) {
    return http.get(`/pets?userId=${userId}`);
  }
  getAllpets() {
    return http.get(`/pets`);
  }
  deletePet(petId) {
    return http.delete(`/pets/${petId}`);
  }
  postPet(data) {
    return http.post(`/pets`, data);
  }
  putPet(id, data) {
    return http.put(`/pets/${id}`, data);
  }

  filterPet(typeSearch, genderSearch, requireAtention) {
    return http.get(`/pets?type=${typeSearch}&gender=${genderSearch}&attention=${requireAtention}`
    );
  }
  getdatafilter() {
    return this.datafilter;
  }
  setdatafilter(data) {
    this.datafilter = data;
  }
  //cambio nombre commit
}

export default new PetsService();
