<template>

<div>

  <template >
    <v-card class="mx-auto" max-width="1000" style="height:330px; ">

    <v-card class="mx-auto" max-width="1000"  >
      <v-img height="200" :src=this.urlToImageBackground></v-img>

      <v-row style="z-index: 2; position:absolute; top: 130px; margin-left: 2.5%;width: 95%; height: 100%">

        <v-list style="background-color:transparent; width: 100%" class="text-sm-left">
          <v-list-item-avatar size="100">
            <img
                v-bind:src="this.urlToImageProfile"
                alt="Name of Us er"
            >
          </v-list-item-avatar>
            <h5  >{{this.name}} {{this.lastName}}</h5>
            <v-list-item-subtitle>{{this.type}}</v-list-item-subtitle>
        </v-list>

      </v-row>

    </v-card>
    </v-card>

    <v-card class="mx-auto" max-width="1000" min-height="250" style=" z-index: 1; margin-top:20px" >

      <v-container >
        <v-row style="position: absolute; margin-left: 0.3%; width:95%" >
          <v-col cols="3">
            <v-text-field
                label="Dni"
                readonly :value=this.dni>

            </v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
                label="Phone"
                readonly :value=this.phone>

            </v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
                label="Name"
                readonly :value=this.name>
            </v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
                label="Last Name"
                readonly :value=this.lastName>
            </v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="User"
                readonly :value=this.user>

            </v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Email"
                readonly :value=this.email>

            </v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
                label="Password"
                readonly :value=this.password>
            </v-text-field>
          </v-col>
          <v-card-actions  v-if="this.storageUser===this.tempUser" >
            <v-btn style="color:white; background-color: #FFC107" @click="onEdit">
              Edit Information
            </v-btn>

          </v-card-actions>
        </v-row>
      </v-container>

    </v-card>


  </template>

<!--      <v-card  max-width="1200"-->
<!--      >-->

<!--        <v-img-->
<!--            :src=this.urlToImageBackground-->
<!--            class="white&#45;&#45;text align-end"-->
<!--            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"-->
<!--            max-height="400px"-->
<!--            alt="background image of profile"-->
<!--        >-->
<!--            <v-avatar style="border-radius:0" size="150">-->
<!--              <img-->
<!--                  alt="image of user profile"-->
<!--                  v-bind:src="this.urlToImageProfile"-->
<!--              >-->
<!--            </v-avatar>-->

<!--            <v-card-subtitle style="font-size:20px">-->
<!--              {{this.name}} {{this.lastName}}-->
<!--              <br/>-->
<!--              <a style="font-size:16px; color: darkgray">@{{this.user}}</a>-->
<!--            </v-card-subtitle>-->

<!--        </v-img>-->

<!--        <v-container>-->
<!--          <v-row>-->
<!--            <v-col cols="4">-->
<!--              <v-text-field-->
<!--                            label="Dni"-->
<!--              readonly :value=this.dni>-->

<!--              </v-text-field>-->
<!--            </v-col>-->
<!--            <v-col cols="4">-->
<!--              <v-text-field-->
<!--                  label="Phone"-->
<!--                  readonly :value=this.phone>-->

<!--              </v-text-field>-->
<!--            </v-col>-->
<!--            <v-col cols="4">-->
<!--              <v-text-field-->
<!--                  label="Type"-->
<!--                  readonly :value=this.type>-->

<!--              </v-text-field>-->
<!--            </v-col>-->
<!--            <v-col cols="6">-->
<!--              <v-text-field-->
<!--                  label="Email"-->
<!--                  readonly :value=this.email>-->

<!--              </v-text-field>-->
<!--            </v-col>-->
<!--            <v-col cols="6">-->
<!--              <v-text-field-->
<!--                  label="Password"-->
<!--                  readonly :value=this.password>-->

<!--              </v-text-field>-->
<!--            </v-col>-->

<!--          </v-row>-->
<!--        </v-container>-->

<!--         <v-card-actions  v-if="this.currentUser===0" >-->
<!--         <v-btn style="color:white; background-color: #FFC107" @click="onEdit">-->
<!--         Edit Information-->
<!--         </v-btn>-->

<!--        </v-card-actions>-->

<!--      </v-card>-->


  <!--Final dibujar publicaciones-->

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
            <v-btn color="blue darken-1" text @click="Close"> Close </v-btn>
            <v-btn color="blue darken-1" text @click="Save"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!--Final Formulario de publicacion-->
  </div>
</template>

<script>
import UsersService from "../core/services/users.service";
export default {
  name: "viewMyUserProfile",
  data: () => ({
    urlToImageBackground: "",
    urlToImageProfile: "",
    type: "",
    user: "",
    password: "",
    ruc: 0,
    dni: "",
    phone: "",
    email: "",
    name: "",
    lastName: "",
    locationId: 0,
    dialog: false,
    currentUser: -1,
    _user: "",
    _password: "",
    _email: "",
    _phone: "",
    _dni: "",
    _name: "",
    _lastName: "",
    _urlToBackgroundImage: "",
    _urlToUserProfileImage: "",
    response: null,
    storageUser:-1,
    tempUser: -1
  }),
  methods: {
    async retrieveUsers() {
      this.storageUser = UsersService.storageUser;
      this.tempUser = UsersService.getCurrentUser()
      await UsersService.getUsersById(localStorage.getItem("user"))
        .then(async response => {
          this.type = await response.data.type;
          this.user = await response.data.userNick;
          this.email = await response.data.email;
          this.password = '******';
          this.ruc = await response.data.ruc;
          this.dni = await response.data.dni;
          this.phone = await response.data.phone;
          this.name = await response.data.name;
          this.lastName = await response.data.lastName;
          this.urlToImageBackground = await response.data.urlToImageBackground;
          this.urlToImageProfile = await response.data.urlToImageProfile;
          this.currentUser = UsersService.currentUser;
        });
    },
    onEdit() {
      this._user = this.user;
      this._password = this.password;
      this._email = this.email;
      this._phone = this.phone;
      this._dni = this.dni;
      this._name = this.name;
      this._lastName = this.lastName;
      this._urlToBackgroundImage = this.urlToImageBackground;
      this._urlToUserProfileImage = this.urlToImageProfile;

      this.dialog = true;
    },
    Close() {
      this.dialog = false;
    },
    Save() {
      UsersService.updateUserById(localStorage.getItem("user"), {
        type: this.type,
        userNick: this._user,
        pass: this._password,
        ruc: this.ruc,
        dni: this._dni,
        phone: this._phone,
        email: this._email,
        name: this._name,
        lastName: this._lastName,
        urlToImageBackground: this._urlToBackgroundImage,
        urlToImageProfile: this._urlToUserProfileImage,
        districtId: 1
      }).then(
        this.retrieveUsers,
        alert("User Profile Updated"),
        (this.dialog = false)
      );
    },


  },
  mounted() {
    this.retrieveUsers();
  },
  updated() {
    UsersService.storageUser = UsersService.getCurrentUser();
  },
};
</script>

<style scoped>
.grid {
  display: flex;
  flex-direction: column;
  grid-gap: 10px;

}
v-text-field {
  text-decoration: none;
}

.columns {
  text-align: left;
  padding: 0;
  margin: 0;

}

.columns h5{
  font-size:20px;
  padding-left: 10px;  
 }
 .columns h4{
  font-size:22px;  
  padding-top:18px ;
 }
 
.btn
{
  padding-bottom:20px ;
  margin-bottom: 20px;
}

span{
  color:rgb(51, 50, 50);
  font-size:19px;
  padding-left:15px;;
}
</style>
