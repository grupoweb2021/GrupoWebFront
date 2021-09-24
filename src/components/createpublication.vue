<template>
  <div>
    <v-form >
      <v-container>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field  label="Regular" v-model="Description" placeholder="Description" ></v-text-field>

          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="Name"  :counter="10" placeholder="Name" required></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="IsAttention" :counter="10" placeholder="IsAttention" required></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="Race"  :counter="10" placeholder="Race" required></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="Ubication"  :counter="10" placeholder="Ubication" required></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="Commnet"  :counter="10" placeholder="Commnet" required></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="Age"  :counter="10" placeholder="Age" required></v-text-field>
          </v-col>
        </v-row>

        <v-btn  id="SendData" color="primary" @click="sendData({Description,Name,IsAttention,Race,Ubication,Commnet,Age})">
          Submit
        </v-btn>

      </v-container>
    </v-form>
  </div>
</template>

<script>
import CreatepublicationServices from "../core/services/createpublication.service"
export default {
  name: "createpublication",
  data:()=>({
    Description: "Description",
    Name: "Name",
    IsAttention: "Attention",
    Race: "Race",
    Ubication: "Ubication",
    Commnet: "Commnet",
    Age: 2,
  }),
  methods:{
    sendData(data){
      CreatepublicationServices.postNewPublication(data);
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
#SendData{
  background-color:orange;
  color:white;
}
</style>