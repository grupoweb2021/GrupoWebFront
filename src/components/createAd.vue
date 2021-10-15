<template>
<div>
  <v-card>
    <v-card-title primary-title class="justify-center"> Create Ad</v-card-title>
    <v-card-actions class="justify-center" >
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="justify-center"
      >
        <v-text-field
            v-model="title"
            :counter="30"
            :rules="titlesRules"
            label="title"
            required
            class="addInput"
        ></v-text-field>
        <v-text-field
            v-model="description"
            :counter="200"
            :rules="descRules"
            label="Description"
            required
            class="addInput"
        ></v-text-field>
        <v-text-field
          v-model="discount"
          :rules="discountRules"
          label="Discount(optional)"
          class="addInput"
      ></v-text-field>
        <v-text-field
            v-model="urlToImage"
            label="urlToImage(optional)"
            class="addInput"
        ></v-text-field>
        <v-card-actions class="justify-center">
          <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate(),postAd({dateTime,title,description,discount,urlToImage,userId,promoted})"
          >
            Save
          </v-btn>
          <v-btn
              color="error"
              @click="goToAllPublications"
          >
            Cancel
          </v-btn>

        </v-card-actions>
        <v-alert
            dense
            text
            type="success"
            v-model="postSuccesfull"
        >
          Your add has been <strong>Succesfully</strong> Created
        </v-alert>
      </v-form>
    </v-card-actions>
  </v-card>
</div>
</template>

<script>
import AdServices from "../core/services/ad.service"
export default {
  name: "createAdd-vet",
  data:()=>({
    valid:false,
    title:'',
    titlesRules: [
      v => !!v || 'title is required',
      v => (v && v.length <= 30) || 'title must be less than 30 characters',
    ],
    description:'',
    descRules:[
      v => !!v || 'Description is required',
      v => (v && v.length <= 200) || 'title must be less than 200 characters',
    ],
    discount:0,
    discountRules:[
        v=>/[\d.]+/.test(v)|| 'Discount must be only numbers'
    ],
    urlToImage:'',
    userId:0,
    postSuccesfull:false,
    dateTime:'13-13-13 6:00pm',
    promoted:true
  }),
  methods:{
    validate() {
      this.$refs.form.validate();
    },
    postAd(data){
      if(this.title=='' || this.description==''){
        this.validate();
      }else{
        AdServices.postNewAd(data);
        this.postSuccesfull=true;
      }
    },
    goToAllPublications(){
      this.$router.push('/allPublications');
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
.addInput{
  width: 600px;
}
</style>