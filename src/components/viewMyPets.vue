<template>
  <v-app>
  <v-data-table
      :headers="headers"
      :items="pets"
      sort-by="calories"
      class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
          flat
      >
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider
            class="mx-4"
            inset
            vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
            v-model="dialog"
            max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>

                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="editedItem.type"
                        label="type"
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="editedItem.name"
                        label="name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="editedItem.attention"
                        label="attention"
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="editedItem.age"
                        label="age"
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="editedItem.race"
                        label="race"
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="editedItem.urlToImage"
                        label="urlToImage"
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="editedItem.isAdopted"
                        label="isAdopted"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
          small
          @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>


    </template>

    <template v-slot:no-data>
      <v-btn
          color="primary"
          @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
  </v-app>
</template>


<script>
  import PetsService from "@/core/services/pets.service";
  import UserService from "@/core/services/users.service";


  export default {
  name: "viewMyPets",
  data: () => ({
  dialog: false,
  dialogDelete: false,
  headers: [
{
  text: 'id',
  align: 'start',
  sortable: false,
  value: 'id',
},
    { text: 'type', value: 'type' },
    { text: 'name', value: 'name' },
    { text: 'attention', value: 'attention' },
    { text: 'race', value: 'race' },
    { text: 'age', value: 'age', sortable: false },
    { text: 'urlToImage', value: 'urlToImage', sortable: false },
    { text: 'isAdopted', value: 'isAdopted', sortable: false },
    { text: 'Actions', value: 'actions', sortable: false },
  ],
    pets:[],
  desserts: [],
  editedIndex: -1,
  editedItem: {
    id: '',
    type: '',
    name: '',
    attention: '',
    race: '',
    age: '',
    urlToImage: '',
    isAdopted: '',
    userId: UserService.currentUser
},
  defaultItem: {
    id: '',
    type: '',
    name: '',
    attention: '',
    race: '',
    age: '',
    urlToImage: '',
    isAdopted: '',
    userId: UserService.currentUser
},
}),

  computed: {
  formTitle () {
  return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
},
},

  watch: {
  dialog (val) {
  val || this.close()
},
  dialogDelete (val) {
  val || this.closeDelete()
},
},

  created () {
  this.initialize()
},

  methods: {
    getPets(){
      PetsService.getPets(UserService.currentUser).then(
          response =>{
            this.pets=response.data;
          }
      )
    },
  initialize () {
      this.getPets();
},

  editItem (item) {
  this.editedIndex = this.pets.indexOf(item)
  this.editedItem = Object.assign({}, item)
  this.dialog = true
},

  deleteItem (item) {
  this.editedIndex = this.pets.indexOf(item)
  this.editedItem = Object.assign({}, item)
  this.dialogDelete = true
},

  deleteItemConfirm () {
    PetsService.deletePet(this.pets[this.editedIndex].id)
  this.pets.splice(this.editedIndex, 1)
  this.closeDelete()
},

  close () {
  this.dialog = false
  this.$nextTick(() => {
  this.editedItem = Object.assign({}, this.defaultItem)
  this.editedIndex = -1
})
},

  closeDelete () {
  this.dialogDelete = false
  this.$nextTick(() => {
  this.editedItem = Object.assign({}, this.defaultItem)
  this.editedIndex = -1
})
},

  save () {
  if (this.editedIndex > -1) {
  Object.assign(this.pets[this.editedIndex], this.editedItem)
    console.log(this.editedItem);

    PetsService.putPet(this.editedItem.id,{
      id: this.editedItem.id,
      type: this.editedItem.type,
      name: this.editedItem.name,
      attention: this.editedItem.attention,
      race: this.editedItem.race,
      age: this.editedItem.age,
      urlToImage: this.editedItem.urlToImage,
      isAdopted: this.editedItem.isAdopted,
      userId: UserService.currentUser
    })
} else {
  this.pets.push(this.editedItem)
  PetsService.postPet(this.editedItem)

}
  this.close()
},
},
}
</script>

<style scoped>

</style>
