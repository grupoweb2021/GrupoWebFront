<template>
<div>
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
  <v-card
      class="mx-auto"
      max-width="700" max-height="55" @click="redirectToAddAd()" style="margin-top:20px;">
    <v-text-field solo
                  filled
                  disabled
                  placeholder="Agregar Anuncio"
    >

    </v-text-field>

  </v-card>
  <br/>
  <v-responsive :aspect-ratio="16/9">

    <v-card
        class="mx-auto"
        max-width="700"
    >


      <v-container fluid>


        <v-row dense>
          <v-col
              v-for="ad in Ads"
              :key="ad.id"
              :cols=12
          >

                <v-card>
                  <v-img
                      :src=ad.urlToImage
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="300px"
                  >
                    <v-card-title v-text="ad.title"></v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0 text-left" v-text="ad.discount"></v-card-subtitle>
                  <v-card-text class="pb-0 text-left" v-text="ad.description"></v-card-text>
                  <v-card-actions>
                    <v-btn
                        color="primary"
                        @click="EditItem(ad)"
                    >
                      EDIT
                    </v-btn>
                    <v-btn
                        color="error"
                        @click="deleteDialogA(ad.id)"
                    >
                      Delete
                    </v-btn>
                  </v-card-actions>
                </v-card>

          </v-col>
        </v-row>


      </v-container>
    </v-card>
  </v-responsive>
</div>
</template>

<script>
import AdService from "../core/services/ad.service";
export default {
  name: "viewMyAds",
  data:()=>({
    Ads:[],
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
    getAllUserAds(id){
      AdService.getAllByUserId(id).then((response) => {
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
    this.getAllUserAds(this.userId);
  }

}
</script>

<style scoped>

</style>