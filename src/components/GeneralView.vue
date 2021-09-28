<template >
  <div >
<<<<<<< MarxParte
  <div>MIS PUBLICACIONES</div>
    <div v-for="publication in publications" :key="publication.id"  >
      <v-card
          class="mx-auto  "
          width="400px"
=======
  <div >MIS PUBLICACIONES</div>
    <div  v-for="(publication,index) in publications" :key="publication.id" >
      <v-card
          class="mx-auto"
          max-width="400"

>>>>>>> main
      >
        <v-card-title>{{ publication.name }}</v-card-title>
        <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
<<<<<<< MarxParte

=======
          <v-card-title>{{ publication.description}}</v-card-title>
>>>>>>> main
        </v-img>

        <v-card-subtitle class="pb-0">
          {{ publication.ubication }}
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{ publication.description }}</div>
        </v-card-text>

        <v-card-actions>
<<<<<<< MarxParte
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


=======
          <v-btn
              color="orange"
              text
              @click="editMyPublications()"
          >
            {{publication.id}}

          </v-btn>

          <v-btn
              color="error"
              text @click="DeletePublication(publication.id)"
          >
            Delete
          </v-btn>
>>>>>>> main
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
    truevalue: true,
    _id: 0,
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
            console.log(this.publications);
          })
          .catch(e => {
            console.log(e);
          })
    },
    editMyPublications(){
    this.$router.push('/editPublication');
<<<<<<< MarxParte
  },
  deletePublicationbyId(id){
      CreatepublicationServices.deletePublication(id);
  }
=======
    },

    DeletePublication(id)
    {
    CreatepublicationServices.DeletePublication(id).then(
        this.retrievePublications
  );
  },
>>>>>>> main

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
