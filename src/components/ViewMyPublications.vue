<template >
    <div>
      <div  v-for="publication in publications" :key="publication.id" style="display: flex;
    justify-content: center;" >
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
            <v-card-title>Titled</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">
            Subtitled
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ publication.comment }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
                color="orange"
                text
                @click="editMyPublications()"
            >
              {{publication.id}}

            </v-btn>

            <v-btn
                color="error"
                text @click="new DeletePublication(publication.id)"
            >
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>

      </div>
    </div>
</template>

<script>
import CreatepublicationServices from "../core/services/createpublication.service.js"

export default {
  name: "ViewMyPublications",
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
        comment: publication.comment
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
