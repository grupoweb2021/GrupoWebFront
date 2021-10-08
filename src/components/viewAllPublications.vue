<template>

  <div>

    <!--Inicio Formulario de publicacion-->
    <v-row justify="center">
      <v-dialog
          v-model="dialog"
          persistent
          max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
          >
            Open Dialog
          </v-btn>
        </template>
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
                      label="First name*"
                      required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      label="Middle name"
                      hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      label="Last name*"
                      hint="example of persistent helper text"
                      persistent-hint
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      label="Email*"
                      required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      label="Password*"
                      type="password"
                      required
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-select
                      :items="['0-17', '18-29', '30-54', '54+']"
                      label="Age*"
                      required
                  ></v-select>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-autocomplete
                      :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                      label="Interests"
                      multiple
                  ></v-autocomplete>
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
                @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!--Final Formulario de publicacion-->


    <div >MIS PUBLICACIONES</div>
    <!--Inicio dibujar publicaciones-->
    <div  v-for="publication in publications" :key="publication.id" style="display: flex; justify-content: center;">
      <v-card
          class="mx-auto "
          max-width="700"
          style="margin: 20px"
      >
        <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>

        <v-card-subtitle class="pb-0">
          Subtitled
        </v-card-subtitle>
        <v-card-text class="text--primary">
          <div>{{ publication.comment }}</div>
        </v-card-text>
        <v-card-actions>
          <v-btn
              color="primary"
              @click="editMyPublications()"
          >
            See More
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <!--Final dibujar publicaciones-->

  </div>

</template>

<script>
import CreatepublicationServices from "../core/services/createpublication.service.js"
import PublicationsService from "../core/services/publications.service.js"

///TODO: Enviar datos del formulario a la base de datos
export default {
  name: "viewAllPublications",
  data: () => ({
    publications:[],
    truevalue: true,
    _id: 0,
    dialog: false,
  }),
  publicationId:null,
  methods: {
    getDisplayPublications(publication) {
      return {
        id: publication.id,
        comment: publication.comment
      }
    },
    retrievePublications() {
      PublicationsService.getUserPublications(0)
          .then(response => {
            this.publications = response.data;
            console.log(this.publications);
          })
          .catch(e => {
            console.log(e);
          })
    },
    editMyPublications(){
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
  },
}
</script>

<style scoped>

</style>
