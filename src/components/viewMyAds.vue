<template>
<v-app>

  <template >
    <v-btn
        color="primary"
        dark
        class="mb-2"
        @click="redirectToAddAd()"
    >
      New Add
    </v-btn>
  </template>


  <v-container >
    <v-row >
      <v-col
          v-for="add in Ads"
          :key="add.id"
          cols="12"
          sm="6"
          md="4"
      >

        <v-card
            class="mx-auto"
            max-width="344"
        >


          <v-img
              :src="add.urlToImage"
              class="white--text align-end"
              height="200"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          >
            <v-card-title  v-text="add.title"></v-card-title>
          </v-img>


          <v-card-actions>
            <v-btn
                color="orange lighten-2"
                text
                @click="EditItem(add)"
            >
              Edit
            </v-btn>

            <v-btn
                color="orange lighten-2"
                text
                @click="deleteDialogA(add.id)"
            >
              Delete
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn
                icon
                @click=" showInfCard(add.id)"
            >
              <v-icon>{{ showAux===add.id || (showAux===1&&add.id===0) ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showAux===add.id || (showAux===1&&add.id===0)">
              <v-divider></v-divider>


              <v-card-text overline style="text-align:left" >
                Date: {{add.dateTime}} <br/>
                Description Attention: {{add.description}} <br/>
                %Discount: {{add.discount}} <br/>
                Url: {{add.urlToImage}} <br/>
                Promoted: {{add.promoted}} <br/>
              </v-card-text>

            </div>
          </v-expand-transition>
        </v-card>

      </v-col>
    </v-row>
  </v-container>


  <v-dialog
      v-model="editDialog"
      persistent
      max-width="600px"
  >
    <v-card>
      <v-card-title>
        <span class="text-h5">User Profile</span>
      </v-card-title>
      <v-card-text>

        <v-container>
          <v-row>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
              <v-text-field
                  label="Title"
                  v-model="title"

              ></v-text-field>
            </v-col>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
              <v-text-field
                  label="discount"
                  v-model="discount"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                  label="description"
                  v-model="description"

              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                  label="age"
                  v-model="urlToImage"

              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="primary"
            text
            @click="close"
        >
          Close
        </v-btn>
        <v-btn
            color="blue darken-1"
            text
            @click="SaveEditItem(SelectedAdId,{title,description,discount,urlToImage,userId,promoted,dateTime})"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog
      v-model="deleteDialog"
      persistent
      max-width="600px"
  >
    <v-card>
      <v-card-title>
        <span class="text-h5">¿Estas seguro de Eliminar este Anuncio?</span>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="primary"
            text
            @click="closeDelete"
        >
          Cancelar
        </v-btn>
        <v-btn
            color="blue darken-1"
            text
            @click="DeleteItem(currentId)"
        >
          Eliminar
        </v-btn>
        </v-card-actions>
    </v-card>
  </v-dialog>




</v-app>
</template>

<script>
import AdService from "../core/services/ad.service";
import UserService from "@/core/services/users.service";

export default {
  name: "viewMyAds",
  data:()=>({
    dialog: false,
    show: -1,
    showAux: -1,
    Ads:[],
    editedIndex: -1,
    userId:1,
    SelectedAdId:0,
    title:'',
    description:'',
    discount:0,
    urlToImage:'',
    dateTime:'',
    promoted:false,
    editDialog:false,
    deleteDialog:false,
    currentId:0
  }),
  methods:{
    getAllUserAds(){
      AdService.getAllByUserId(UserService.currentUser).then((response) => {
        this.Ads = response.data;
      });
    },
    setDialog(flag){
      this.dialog=flag;
    },
    redirectToAddAd(){
      this.$router.push('/createAD')
    },
    seeMyAds(){
      this.$router.push('/myAds')
    },
    showInfCard(id){

      if(id!==0){
        this.showAux=-id*this.show;
      }
      else{
        this.showAux= -this.show;
      }
      console.log(this.showAux)
      this.show=-this.show;

    },
    EditItem(data){
      this.editDialog=true;
      this.SelectedAdId=data.id;
      this.title=data.title;
      this.description=data.description;
      this.discount=data.discount;
      this.urlToImage=data.urlToImage;
      this.dateTime=data.dateTime;
      this.promoted=data.promoted;
    },
    SaveEditItem(id,data){
      this.editDialog=false;
      AdService.UpdateAd(id,data).then(this.$router.go(0));
    },
    deleteDialogA(ID){
      this.deleteDialog=true;
      this.currentId=ID;
    },
    DeleteItem(id){
      AdService.DeleteAd(id);
      this.deleteDialog=false;
      this.$router.go(0)
    },
    close(){
      this.editDialog=false;
    },
    closeDelete() {
      this.deleteDialog=false;
    }
  },
  mounted() {
    this.getAllUserAds();
  }

}
</script>

<style scoped>

</style>
