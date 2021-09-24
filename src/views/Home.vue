<template>
  <div class="home">
    <!--Button to create a new publication-->
    <v-btn  id="createpublication" color="primary" @click="clickCreatePublication">
      Create Adoption
    </v-btn>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods:{
    clickCreatePublication(){
      this.$router.push('/createpublication');
    }
  }
}
</script>
