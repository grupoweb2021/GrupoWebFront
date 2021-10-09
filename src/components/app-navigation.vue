<template>
  <div>
    <v-list-item class="px-2 mb-4" >

      <v-list-item-title>ADOPTME YA!</v-list-item-title>

    </v-list-item>

    <v-divider></v-divider>

    <v-list dense >
      <v-list-item @click="goToMyPublications" >
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title >MY PUBLICATIONS</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list dense>
      <v-list-item @click="goToAllPublications">

        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>ALL PUBLICATIONS</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-list>
    <v-list dense>
      <v-list-item @click="goToPets">

        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>MY PETS</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-list>

  </div>
</template>

<script>
export default {
  name: "app-navigation",
  data () {
    return {
      drawer: true,
      items: [
        { title: 'MY PUBLICATIONS', icon: 'mdi-view-dashboard' },
        { title: 'ALL PUBLICATIONS', icon: 'mdi-view-dashboard' },
      ],

    }
  },
  components: { },
  methods: {
    goToMyPublications(){
      this.$router.push('/myPublications');
    },
    goToAllPublications(){
      this.$router.push('/allPublications');
    },
    goToPets(){
      this.$router.push('/myPets');
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
