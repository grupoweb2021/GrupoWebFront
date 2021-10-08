<template >
  <div >


    <!--Inicio Formulario de publicacion-->
    <v-row justify="center">
      <v-dialog
          v-model="dialog"
          persistent
          max-width="600px"
      >

        <v-card>
          <v-card-title>
            <span class="text-h5">User Profile</span>
          </v-card-title>

          <div class="text-center">
            <v-menu
                open-on-hover
                top
                offset-y
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                  Chose your Pet
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                    v-for="(pet, index) in pets"
                    :key="index"
                >
                  <v-list-item-title type="button" @click="filFormPubication(pet)">{{ pet.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      label="type"
                      v-model="tipo"
                      disabled
                      required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      label="attention"
                      v-model="attention"
                      disabled
                      hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      label="race*"
                      v-model="race"
                      hint="example of persistent helper text"
                      persistent-hint
                      disabled
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      label="age"
                      v-model="age"
                      disabled
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      label="urlToImage"
                      v-model="urlToImage"
                      disabled
                      required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                      label="comment"
                      v-model="comment"

                      required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="Close"
            >
              Close
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="Save"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!--Final Formulario de publicacion-->

    <v-card
        class="mx-auto"
        max-width="700" max-height="55" @click="setDialog(true)" style="margin-top:20px;">
      <v-text-field solo
                    filled
                    disabled
                    placeholder="Agregar Publicación"
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
              v-for="publication in publications"
              :key="publication.id"
              :cols=12
          >
            <div v-for="pet in pets" :key="pet.id">
            <div v-if="pet.id===publication.petId">
            <v-card>
              <v-img
                  :src=pet.urlToImage
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="300px"
              >
                <v-card-title v-text="pet.name"></v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0 text-left" v-text='"Type: "+ pet.type'></v-card-subtitle>
              <v-card-subtitle class="pb-0 text-left" v-text="publication.comment"></v-card-subtitle>
              <v-card-subtitle class="pb-0 text-left" v-text="pet.attention"></v-card-subtitle>
              <v-card-subtitle class="pb-0 text-left" v-text="pet.race"></v-card-subtitle>
              <v-card-subtitle class="pb-0 text-left" v-text="pet.age"></v-card-subtitle>
              <v-card-subtitle class="pb-0 text-left" v-text="pet.isAdopted"></v-card-subtitle>
              <v-card-actions>
                <v-btn
                    color="primary"
                    @click="editPublication(pet,publication)"
                >
                  EDIT
                </v-btn>
                <v-btn
                    color="error"
                    @click="DeletePublication(publication.id)"
                >
                  Delete
                </v-btn>
              </v-card-actions>
            </v-card>
            </div>
            </div>
          </v-col>
        </v-row>


      </v-container>
    </v-card>
    </v-responsive>

  </div>

</template>

<script>
import PublicationsService from "../core/services/publications.service.js"
import UserService from "../core/services/users.service.js"
import PetsService from "../core/services/pets.service"



export default {
  name: "ViewMyPublications",
  data: () => ({
    editActivate: false,
    publications:[],
    currentPetId:-1,
    currentPublicationId:-1,
    tipo: '',
    name: '',
    attention: '',
    race: '',
    age: '',
    urlToImage: '',
    isAdopted: '',
    userId: '',
    comment: '',
    datetime: '00/00/00',
    pets:[],
    truevalue: true,
    _id: 0,
    dialog: false,
  }),
  publicationId:null,
  methods: {
    defaultForm(){
      this.currentPetId=-1;
      this.currentPublicationId=-1;
      this.tipo= '';
      this.name= '';
      this.attention= '';
      this.race= '';
      this.age= '';
      this.urlToImage= '';
      this.isAdopted= '';
      this.userId= '';
      this.comment= '';
    },
    getPets(){
      PetsService.getPets(UserService.currentUser).then(
      response =>{
        this.pets=response.data;
      }
      )
    },
    getDisplayPublications(publication) {
      return {
        id: publication.id,
        comment: publication.comment
      }
    },
    retrievePublications() {
      PublicationsService.getUserPublications(UserService.currentUser)
          .then(response => {
            this.publications = response.data;
            console.log(this.publications);
          })
          .catch(e => {
            console.log(e);
          })
    },
    editPublication(Pet, Publication){
      this.dialog=true;
      this.editActivate=true;
      this.tipo= Pet.type;
      this.name= Pet.name;
      this.attention= Pet.attention;
      this.race= Pet.race;
      this.age= Pet.age;
      this.urlToImage= Pet.urlToImage;
      this.isAdopted= Pet.isAdopted;
      this.userId= Pet.userId;
      this.comment= Publication.comment;
      this.datetime= '00/00/00';
      this.currentPetId= Pet.id;
      this.currentPublicationId= Publication.id;
    },
    Save(){
      if(this.editActivate){
      PublicationsService.putPublication(this.currentPublicationId,{
        comment:this.comment,
        petId: this.currentPetId,
        datetime: this.datetime,
        userId: this.userId
      }).then(
          this.retrievePublications,
          this.getPets,
          this.dialog=false,
        this.editActivate=false,
        this.defaultForm(),
      );
      }
      else{
        PublicationsService.postNewPublication({
          comment:this.comment,
          petId: this.currentPetId,
          datetime: this.datetime,
          userId: this.userId
        }).then(
            this.retrievePublications,
            this.getPets,
            this.dialog=false,
        this.editActivate=false,
        this.defaultForm(),
        )
      }
    },
    Close(){
      this.dialog=false;
      this.editActivate=false;
      this.defaultForm();
    },
    DeletePublication(id)
    {
      PublicationsService.DeletePublication(id).then(
          this.retrievePublications
      );
    },
    setDialog(flag){
      this.dialog=flag;
    },
    filFormPubication(Pet){
      this.tipo= Pet.type;
      this.name= Pet.name;
      this.attention= Pet.attention;
      this.race= Pet.race;
      this.age= Pet.age;
      this.urlToImage= Pet.urlToImage;
      this.isAdopted= Pet.isAdopted;
      this.userId= Pet.userId;
      this.datetime= '00/00/00';
      this.currentPetId= Pet.id;
    }

  },
  mounted () {
    this.retrievePublications();
    this.getPets();
  },
}
</script>

<style scoped>

</style>
