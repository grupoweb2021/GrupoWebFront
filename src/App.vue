<template>
  <v-app>

    <v-navigation-drawer app color="white" >
      <app-navigation></app-navigation>
    </v-navigation-drawer>


    <v-app-bar app color="white">
      <app-bar></app-bar>
    </v-app-bar>


    <v-main>
      <v-container fluid>

      <router-view/>

      </v-container>
    </v-main>

  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import AppBar from "@/components/app-bar";
import AppNavigation from "@/components/app-navigation";
export default {
  components: {AppNavigation, AppBar}
}
</script>
