<template >
  <div >
  <div>MIS PUBLICACIONES</div>
    <div v-for="publication in publications" :key="publication.id"  >
      <v-card
          class="mx-auto  "
          width="400px"
      >
        <v-card-title>{{ publication.name }}</v-card-title>
        <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >

        </v-img>

        <v-card-subtitle class="pb-0">
          {{ publication.ubication }}
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{ publication.description }}</div>
        </v-card-text>

        <v-card-actions>
          <table>
            <tr>
              <td>
                <v-btn
                    id="btnedit"
                    text
                    @click="editMyPublications"
                >
                  Edit
                </v-btn>
              </td>
              <td>
                <v-spacer></v-spacer>
              </td>
              <td>
                <v-btn
                    id="btndelete"
                    depressed
                    color="error"
                    text
                    @click="deletePublicationbyId(publication.id)"
                >
                  delete
                </v-btn>
              </td>
            </tr>
          </table>


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
  },
  deletePublicationbyId(id){
      CreatepublicationServices.deletePublication(id);
  }

  },
  mounted () {
    this.retrievePublications();
  },

}


</script>

<style scoped>
#btnedit{
  background-color: blue;
}
#btndelete{
  background-color: red;
}
</style>
