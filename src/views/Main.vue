<template>
  <div>
    <nav-bar @setShow="getShow" ></nav-bar>
    <view-my-publications v-if="this.getStringToView === 'viewPublications'"></view-my-publications>

  </div>
</template>

<script>
import NavBar from "@/components/nav-bar";
import ViewMyPublications from "@/components/ViewMyPublications";

export default {
  name: "Main",
  data: () => ({
    getStringToView: String,
  }),
  components: { NavBar, ViewMyPublications},
  methods: {
    getShow(dataRecieved){
      this.getStringToView = dataRecieved.dato;
    }
  }
}
</script>

<style scoped>

</style>
