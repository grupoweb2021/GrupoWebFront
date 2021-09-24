<template>
  <div class="home" align="center">

<v-container>

    <v-card
        class="mx-auto"
        max-width="344"
    >
      <v-img
          src="https://www.melopienso.com/wp-content/uploads/2019/10/la-felicidad-que-trae-un-perro.jpg"
          height="200px"
      ></v-img>

      <v-card-title>
        Time to let it go
      </v-card-title>

      <v-card-subtitle>
        More than 1000 users are waiting for the
      </v-card-subtitle>

      <v-card-actions>
        <v-btn  id="createpublication" @click="clickCreatePublication">
          Create Adoption
        </v-btn>

      </v-card-actions>

    </v-card>
</v-container>





    <!--Button to create a new publication-->


<!--    <v-btn  id="showPublications" color="primary" @click="showAllPublications">-->
<!--      Watch All Publications-->
<!--    </v-btn>-->
<!--    <p >-->
<!--    {{this.datos}}-->
<!--    </p>-->

  </div>
</template>

<script>
// @ is an alias to /src
//import CreatepublicationServices from "../core/services/createpublication.service"
export default {
  name: 'Home',
  data(){
    return{
      datos:[]
    };
  },
  components: {
  },
  methods:{
    clickCreatePublication(){
      this.$router.push('/createpublication');
    },
    // showAllPublications(){
    //   CreatepublicationServices.getAllPublications().then(response=>{
    //     this.datos=response.data;
    //   })
    // }
  }
}
</script>

<style>
  #createpublication{
    background-color: orange;
    color: white;
  }
</style>
