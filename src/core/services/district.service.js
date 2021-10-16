import http from "./http-common"

class districtService
{
    endpoint="districts"
    datafilter
    getAllDistricts()
    {
        return http.get(`/${this.endpoint}`)
    }

    getByDistrict(data){

        if(data===undefined)
        {
            this.getAllDistricts()
        }else
        {
            return http.get(`/${this.endpoint}?district=${data}`)
        }
    }
    getdistrictfilter() {
        return this.datafilter;
      }
      setdistrictfilter(data) {
        this.datafilter = data;
        //change
      }
}
export default new districtService()