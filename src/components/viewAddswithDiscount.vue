<template>
  <div>
    <v-responsive >

      <v-layout row wrap>
        <v-flex xs12 >

          <v-card  class="mx-auto"
           v-for="add in listAdds"
                 :key="add.id"
          >
            <v-container fluid>

              <v-card-title class="font-weight-bold ml-8 mb-2"> {{add.title}}</v-card-title>
              <v-img
                  :src=add.urlToImage
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="400px"
                  width="auto"
                  alt="background image of profile"
              >

              </v-img>

              <v-card-text class="text-sm-h6 font-weight-light">Description: {{ add.description }}</v-card-text>
              <v-card-text class="text-sm-h6 font-weight-light">Discount: {{ add.discount }}% </v-card-text>
              <v-card-text class="text-sm-h6 font-weight-light">Any promotion?: {{ add.promoted }} </v-card-text>

              <v-flex class="text-xs-right">
                <v-card-actions fluid class="btns">
                  <v-btn class="green white--text" href="https://api.whatsapp.com/send?phone= +51 921285233"   target="blank">
                    Whatsapp
                  </v-btn>

                </v-card-actions>
              </v-flex>

            </v-container>
          </v-card>

        </v-flex>

      </v-layout>
      <!--Final dibujar publicaciones-->
    </v-responsive>

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
