<template >
  <div >

    <v-container >
      <v-row >
        <v-col v-for="add in listAdds"
               :key="add.id"
               cols="12"
               md="6">
          <v-card>
            <v-card-title class="font-weight-bold">
              {{add.title}}
            </v-card-title>
            <v-img :src=add.urlToImage>
            </v-img>
            <v-card-text class="text-sm-h6 font-weight-light">
              Description: {{ add.description }}
              <br/>
              Discount: {{ add.discount }}%
              <br/>
              Any promotion?: {{ add.promoted }}

            </v-card-text>
            <v-card-actions fluid class="btns">
              <v-btn class="green white--text" href="https://api.whatsapp.com/send?phone= +51 921285233"   target="blank">
                Whatsapp
              </v-btn>
            </v-card-actions>

          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>


import UsersService from "@/core/services/users.service";
import AddServices from "@/core/services/ad.service"

export default {
  name: "discountedAdd",
  data: ()=>({
    userId:UsersService.currentUser,
    listAdds:[],

    dateTime:'',
    title:'',
    description:'',
    discount: 0,
    urlToImage: '',
    promoted:false,
    phoneNumber:0

  }),
  components: { },
  methods: {

   retrieveDiscountedAdds(){
     UsersService.getUsersById(UsersService.currentUser).then(response=>{
       this.phoneNumber=response.data.phone;
       console.log(this.phoneNumber);
     });
     AddServices.getDiscountedAdds().then(result=>{

       this.listAdds=result.data;
       console.log(result.data);

     }).catch(e => {
           console.log(e);
         })
   }
  },
  mounted () {
    this.retrieveDiscountedAdds()
  }
}
</script>

<style scoped>


</style>
