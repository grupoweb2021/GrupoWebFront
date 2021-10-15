<template>
  <div>
    <filtercomponent/>
          <v-col>
            <v-btn
                    color="primary" 
                    elevation="2"
                    @click="recibirinfo">Filter</v-btn>
          </v-col>
                      <br>

    <H1>PUBLICATIONS</H1>

    <!--Inicio dibujar publicaciones-->
    <v-responsive :aspect-ratio="16 / 9">
      <v-card class="mx-auto" max-width="700">
        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="publication in publications"
              :key="publication.id"
              :cols="12"
            >
              <div v-for="pet in pets" :key="pet.id">
                <div v-if="pet.id === publication.petId">
                  <v-card>

                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar>
                          <img @click="goToUserProfile(publication.userId)" src= "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/User_with_smile.svg/1200px-User_with_smile.svg.png">
                        </v-list-item-avatar>
                      </v-list-item>
                    </v-list>

                    <v-img
                      :src="pet.urlToImage"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="300px"
                    >
                      <v-card-title v-text="pet.name"></v-card-title>
                    </v-img>
                    <v-card-subtitle
                      class="pb-0 text-left"
                      v-text="'Type: ' + pet.type"
                    ></v-card-subtitle>
                    <v-card-subtitle
                      class="pb-0 text-left"
                      v-text="publication.comment"
                    ></v-card-subtitle>
                    <v-card-subtitle
                      class="pb-0 text-left"
                      v-text="pet.attention"
                    ></v-card-subtitle>
                    <v-card-subtitle
                      class="pb-0 text-left"
                      v-text="pet.race"
                    ></v-card-subtitle>
                    <v-card-subtitle
                      class="pb-0 text-left"
                      v-text="pet.age"
                    ></v-card-subtitle>
                    <v-card-subtitle
                      class="pb-0 text-left"
                      v-text="pet.gender"
                    ></v-card-subtitle>
                    <v-card-actions>
                      <v-btn color="orange" @click="FormtoAdopt(pet.userId)">
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
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5"
              >To: {{ this.nameOfOwner }} {{ this.lastnameOfOwner }}
            </span>
          </v-card-title>

          <div class="text-center">
            <v-menu open-on-hover top offset-y> </v-menu>
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
            <v-btn color="blue darken-1" text @click="Close"> Close </v-btn>
            <v-btn color="blue darken-1" text> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!--Final Formulario de publicacion-->
  </div>
</template>

<script>
import CreatepublicationServices from "../core/services/createpublication.service.js";
import PublicationsService from "../core/services/publications.service.js";
import PetsService from "@/core/services/pets.service";
import UsersService from "../core/services/users.service";
import filtergeneral from "../components/filter.vue";

///TODO: Enviar datos del formulario a la base de datos
export default {
  name: "viewAllPublications",
  data: () => ({
    publications: [],
    truevalue: true,
    _id: 0,
    dialog: false,
    message: "",
    userId_publication: "",
    nameOfOwner: "",
    lastnameOfOwner: "",
    pets: [],
    urlPerPublication: "",
  }),
  publicationId: null,
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
      };
    },
    FormtoAdopt(userId) {
      console.log(userId);
      this.userId_publication = userId;
      this.getFullNameOfOwner();
      this.dialog = true;
    },
    getUserIdbyPublication() {
      return this.userId_publication;
    },
    Close() {
      this.dialog = false;
      this.editActivate = false;
      this.defaultForm();
    },
    getAllPets() {
      PetsService.getAllpets().then((response) => {
        this.pets = response.data;
      });
    },
    showImageUser(id){
      UsersService.getUsersById(id).then((res) => {
        this.urlPerPublication = res.data.urlToImageProfile;
      })
      return this.urlPerPublication;

    },
    getFullNameOfOwner() {
      UsersService.getUsersById(this.userId_publication).then((response) => {
        this.nameOfOwner = response.data.name;
        this.lastnameOfOwner = response.data.lastName;
        console.log(this.nameOfOwner);
      });
    },
    goToUserProfile(id){
      UsersService.currentUser = id;
      this.$router.push('/myUserProfile');
    },
    retrievePublications() {
      PublicationsService.getAllPublications()
        .then((response) => {
          this.publications = response.data;
          console.log(this.publications[0].comment);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    fillFormAdoptionRequest() {
      this.$router.push("/editPublication");
    },

    DeletePublication(id) {
      CreatepublicationServices.DeletePublication(id).then(
        this.retrievePublications
      );
    },

    recibirinfo() {

       this.pets = PetsService.getdatafilter()
    },
  },
  mounted() {
    this.retrievePublications();
    this.getAllPets();
  },
  components: {
    filtercomponent: filtergeneral,
  },
};
</script>

<style scoped>
</style>
