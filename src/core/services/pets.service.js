import http from "./http-common";
import axios from "axios";

class PetsService {
  datafilter;
  getPets(userId) {
    console.log("UserId")
    console.log(userId)
    return axios.get(`https://localhost:5001/api/v1/pets/userId=${userId}`);
  }
  getAllpets() {
    return axios.get(`https://localhost:5001/api/v1/pets`);
  }
  deletePet(petId) {
    return axios.delete(`https://localhost:5001/api/v1/pets/${petId}`);
  }
  postPet(data) {
    return axios.post(`https://localhost:5001/api/v1/pets`, data);
  }
  putPet(id, data) {
    return axios.put(`https://localhost:5001/api/v1/pets/${id}`, data);
  }

  filterPet(typeSearch, genderSearch, requireAtention) {
    if (genderSearch === undefined && requireAtention === undefined) {
      return http.get(`/pets?type=${typeSearch}`);
    } else if (typeSearch === undefined && genderSearch === undefined) {
      return http.get(`/pets?attention=${requireAtention}`);
    } else if (typeSearch === undefined && requireAtention === undefined) {
      return http.get(`/pets?gender=${genderSearch}`);
    } else if (typeSearch === undefined) {
      return http.get(`/pets?gender=${genderSearch}&attention=${requireAtention}`);
    } else if (genderSearch === undefined) {
      return http.get(`/pets?type=${typeSearch}&attention=${requireAtention}`);
    } else if (requireAtention === undefined) {
      return http.get(`/pets?type=${typeSearch}&gender=${genderSearch}`);
    } else {
      return http.get(
          `/pets?type=${typeSearch}&gender=${genderSearch}&attention=${requireAtention}`
      );
    }
  }
  getdatafilter() {
    return this.datafilter;
  }
  setdatafilter(data) {
    this.datafilter = data;
    //change
  }
}

export default new PetsService();
