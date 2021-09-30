<template>
  <div >

        <v-toolbar dark color="#162130" style="height:10vh;">

          <v-toolbar-items>
            <v-btn class="icon" color="#162130" @click.stop="drawer = !drawer">
              <v-icon  >mdi-menu</v-icon>
            </v-btn>

          </v-toolbar-items>

          <v-spacer></v-spacer>

          <v-layout row align-center style="max-width: 30vw; min-width:1vw;">

          </v-layout>
        </v-toolbar>

  <v-sheet
      height="40em"
      width="100%"
      class="overflow-hidden"
      style="position: absolute; "

  >

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        id="nav"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
            link
        >
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <v-list-item-title @click="visibleSection1">Sección 1</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
            link
        >
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <v-list-item-title @click="visibleSection2">Sección 2</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
            link
        >
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            <v-list-item-title @click="visiblePublications">Ver Publicaciones</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </v-sheet>
  </div>
</template>
<script>

export default {
  name: "nav-bar",
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard' },
      ],
    }
  },
  components: { },
  methods: {
    visiblePublications(){
      this.$emit("setShow", {
        dato: "viewPublications"
      })
    },
    visibleSection1(){
      this.$emit("setShow", {
        dato: "viewSection1"
      })
    },
    visibleSection2(){
      this.$emit("setShow", {
        dato: "viewSection2"
      })
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
#nav {
  position: absolute;
  z-index: 3;
}

</style>
