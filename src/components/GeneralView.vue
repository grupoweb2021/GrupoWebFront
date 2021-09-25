<template >
  <div>
    <div v-for="publication in publications" :key="publication.id" >
      <v-card class="my-3" hover>
        <v-container fill-height fluid>
          <v-layout>
            <v-flex xs12 align-end d-flex>
              <span class="headline">{{publication.name}}</span>
              <span class="headline">{{publication.id}}</span>
              <span class="headline">{{publication.description}}</span>
            </v-flex>
          </v-layout>
        </v-container>


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
  methods: {
    getDisplayPublications(publication) {
      return {
        id: publication.id,
        name: publication.Name,
        description: publication.Description
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

  },
  mounted () {
    this.retrievePublications();
  }
}


</script>

<style scoped>

</style>
