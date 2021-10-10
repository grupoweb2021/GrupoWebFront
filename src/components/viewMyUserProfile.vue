<template>
<div>

<v-responsive >

  <v-layout row wrap>
    <v-flex xs12 >

      <v-card  class="mx-auto"

      >
        <v-container fluid>


        <v-card-title class="font-weight-bold ml-8 mb-2">{{this.name}} {{this.lastName}}</v-card-title>
        <v-img
            :src=this.urlToImageBackground
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px"
            width="auto"
            alt="background image of profile"
        >
          <v-card-title>
            <v-avatar size="156">
              <img
                  alt="image of user profile"
                  v-bind:src="this.urlToImageProfile"

              >
            </v-avatar>
            <v-card-subtitle class="text-lg-h3 font-weight-light">@{{this.user}}</v-card-subtitle>
          </v-card-title>


        </v-img>

        <v-card-text>
          <v-card-subtitle class="text-h5 font-weight-bold">DNI: {{this.dni}}</v-card-subtitle>
          <v-card-subtitle class="text-h5 font-weight-bold">Phone: {{this.phone}}</v-card-subtitle>
          <v-card-subtitle class="text-h5 font-weight-bold">Type: {{this.type}}</v-card-subtitle>
          <v-card-subtitle class="text-h5 font-weight-bold">Email: {{this.email}}</v-card-subtitle>
          <v-card-subtitle class="text-h5 font-weight-bold">Password: {{this.password}}</v-card-subtitle>
        </v-card-text>

       <v-flex class="text-xs-right">
         <v-card-actions fluid>
         <v-btn class="btn-edit" @click="onEdit">
         Edit Information
         </v-btn>

        </v-card-actions>
      </v-flex>

        </v-container>
      </v-card>

    </v-flex>

  </v-layout>
  <!--Final dibujar publicaciones-->
</v-responsive>

  <!--Inicio Formulario de publicacion-->
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >

      <v-card >
        <v-card-title>
        User Profile
        </v-card-title>

        <div class="text-center">
          <v-menu
              open-on-hover
              top
              offset-y
          >

          </v-menu>
        </div>

        <v-card-text>
          <v-container>
            <v-row>

              <v-col cols="12">
                <v-text-field
                    label="user"
                    v-model="_user"

                    required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                    label="password"
                    v-model="_password"

                    required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                    label="dni"
                    v-model="_dni"

                    required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                    label="phone"
                    v-model="_phone"

                    required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                    label="email"
                    v-model="_email"

                    required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                    label="name"
                    v-model="_name"

                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    label="lastName"
                    v-model="_lastName"

                    required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                    label="urlToBackgroundImage"
                    v-model="_urlToBackgroundImage"

                    required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                    label="urlToUserProfileImage"
                    v-model="_urlToUserProfileImage"

                    required
                ></v-text-field>
              </v-col>

            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="Close"
          >
            Close
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="Save"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <!--Final Formulario de publicacion-->
</div>
</template>

<script>
import UsersService from "../core/services/users.service"
export default {
  name: "viewMyUserProfile",
  data:()=>({

    urlToImageBackground:'',
    urlToImageProfile:'',
    type:'',
    user:'',
    password:'',
    ruc:0,
    dni:'',
    phone:'',
    email:'',
    name:'',
    lastName:'',
    locationId:0,
    dialog:false,

    _user:'',
    _password:'',
    _email:'',
    _phone:'',
    _dni:'',
    _name:'',
    _lastName:'',
    _urlToBackgroundImage:'',
    _urlToUserProfileImage:''

  }),
  methods:{

    retrieveUsers(){
      UsersService.getUsersById(UsersService.currentUser).then(response => {

        this.type=response.data.type;
        this.user=response.data.user;
        this.password=response.data.password;
        this.ruc=response.data.ruc;
        this.dni=response.data.dni;
        this.phone=response.data.phone;
        this.email= response.data.email;
        this.name= response.data.name;
        this.lastName=response.data.lastName;
        this.urlToImageBackground=response.data.urlToImageBackground;
        this.urlToImageProfile=response.data.urlToImageProfile

      })
          .catch(e => {
            console.log(e);
          })
    },
    onEdit(){

      this._user=this.user;
      this._password=this.password;
      this._email=this.email;
      this._phone=this.phone;
      this._dni=this.dni;
      this._name=this.name
      this._lastName=this.lastName
      this._urlToBackgroundImage=this.urlToImageBackground;
      this._urlToUserProfileImage=this.urlToImageProfile;

      this.dialog=true;

    },
    Close(){
      this.dialog=false;
    },
    Save(){
      UsersService.updateUserById(UsersService.currentUser,{
        type:this.type,
        user:this._user,
        password:this._password,
        ruc:this.ruc,
        dni:this._dni,
        phone:this._phone,
        email:this._email,
        name:this._name,
        lastName:this._lastName,
        urlToImageBackground:this._urlToBackgroundImage,
        urlToImageProfile:this._urlToUserProfileImage
      }).then(
          this.retrieveUsers,
          alert("User Profile Updated"),
          this.dialog=false
      );
    }

  },
  mounted(){
    this.retrieveUsers();
  }
}
</script>

<style scoped>
.userCard{

}
.btn-edit{
color: blue;

}
</style>
