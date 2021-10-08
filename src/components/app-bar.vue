<template>
  <v-toolbar-items v-if="true">
    <v-btn depressed flat class="icon" color="white" @click.stop="drawer = !drawer">
      <v-icon  color="black">mdi-menu</v-icon>
    </v-btn>
  </v-toolbar-items>
</template>

<script>
export default {
  name: "app-bar"
}
</script>

<style scoped>

</style>
