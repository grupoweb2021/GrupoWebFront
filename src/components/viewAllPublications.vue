<template>

  <div>



    <div > PUBLICATIONS</div>
    <!--Inicio dibujar publicaciones-->
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
                <div v-if="pet.id===publication.petId &&pet.userId!==0" >
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
                          color="orange"
                          @click="FormtoAdopt(pet.userId)"
                      >
                       Adopt
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
    <!--Final dibujar publicaciones-->

    <!--Inicio Formulario de publicacion-->
    <v-row justify="center">
      <v-dialog
          v-model="dialog"
          persistent
          max-width="600px"
      >

        <v-card >
          <v-card-title>
            <span class="text-h5">To: {{this.nameOfOwner}} {{this.lastnameOfOwner}} </span>
          </v-card-title>

          <div class="text-center">
            <v-menu
                open-on-hover
                top
                offset-y
            >


            </v-menu>
          </div>

          <v-card-text>
            <v-container>
              <v-row>

                <v-col cols="12">
                  <v-text-field
                      label="message"
                      v-model="message"

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

            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!--Final Formulario de publicacion-->


  </div>

</template>

<script>
import CreatepublicationServices from "../core/services/createpublication.service.js"
import PublicationsService from "../core/services/publications.service.js"
import PetsService from "@/core/services/pets.service";
import UsersService from "../core/services/users.service"

///TODO: Enviar datos del formulario a la base de datos
export default {
  name: "viewAllPublications",
  data: () => ({
    publications:[],
    truevalue: true,
    _id: 0,
    dialog: false,
    message:'',
    userId_publication:'',
    nameOfOwner:'',
    lastnameOfOwner:'',
    pets:[]
  }),
  publicationId:null,
  methods: {
    getDisplayPublications(publication) {
      return {
        /*
          "comment": "is lovely",
      "petId": 9,
      "datetime": "00/00/00",
      "userId": 0,
      "id": 6
         */
        id: publication.id,
        comment: publication.comment,

      }
    },
    FormtoAdopt(userId){
      console.log(userId)
      this.userId_publication=userId;
     this.getFullNameOfOwner();
      this.dialog=true;

    },
    getUserIdbyPublication(){
      return this.userId_publication;
    },
    Close(){
      this.dialog=false;
      this.editActivate=false;
      this.defaultForm();
    },
    getAllPets(){
      PetsService.getAllpets().then(
          response =>{
            this.pets=response.data;
          }
      )
    },
    getFullNameOfOwner(){
      UsersService.getUsersById(this.userId_publication).then(
          response =>{
            this.nameOfOwner=response.data.name;
            this.lastnameOfOwner=response.data.lastName;
            console.log(this.nameOfOwner)
          }
      )

    },
    retrievePublications() {
      PublicationsService.getAllPublications().then(response => {

        this.publications = response.data;
        console.log(this.publications[0].comment);
      })
          .catch(e => {
            console.log(e);
          })
      //borra esto

    },
    fillFormAdoptionRequest(){
      this.$router.push('/editPublication');
    },

    DeletePublication(id)
    {
      CreatepublicationServices.DeletePublication(id).then(
          this.retrievePublications
      );
    },

  },
  mounted () {
    this.retrievePublications();
    this.getAllPets();
  },
}
</script>

<style scoped>

</style>
