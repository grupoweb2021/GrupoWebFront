<template >
  <div >
  <div >MIS PUBLICACIONES</div>
    <div v-for="publication in publications" :key="publication.id" >
      <v-card
          class="mx-auto"
          max-width="400"
      >
        <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>{{ publication.title }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
          {{ publication.ubication }}
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{ publication.description }}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn
              color="orange"
              text
              @click="editMyPublications"
          >
            Edit
          </v-btn>

          <v-btn
              color="error"
              text
          >
            delete
          </v-btn>
        </v-card-actions>
      </v-card>

    </div>
  </div>



</template>

<script>
import CreatepublicationServices from "../core/services/createpublication.service.js"

export default {
  name: "viewPublications",
  data: () => ({
    publications:[],
  }),
  publicationId:null,
  methods: {
    getDisplayPublications(publication) {
      return {
        id: publication.id,
        name: publication.Name,
        description: publication.Description,
        ubication:publication.Ubication
      }
    },
    retrievePublications() {
      CreatepublicationServices.getAllPublications()
          .then(response => {
            this.publications = response.data.map(this.getDisplayPublications);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          })
    },
  editMyPublications(){
    this.$router.push('/editPublication');
  }

  },
  mounted () {
    this.retrievePublications();
  },

}


</script>

<style scoped>

</style>
