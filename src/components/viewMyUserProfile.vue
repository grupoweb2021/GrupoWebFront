<template>
  <div>
    <v-card max-width="">
      <v-img
        :src="this.urlToImageBackground"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        max-height="360px"
        alt="background image of profile"
      >
        <v-avatar style="border-radius: 0" size="150">
          <img
            alt="image of user profile"
            v-bind:src="this.urlToImageProfile"
          />
        </v-avatar>

        <v-card-subtitle style="font-size: 20px">
          {{ this.name }} {{ this.lastName }}
          <br />
          <a style="font-size: 16px; color: white">@{{ this.user }}</a>
        </v-card-subtitle>
      </v-img>

      <v-container class="containerer">
        <v-row class="grid">
          <v-col class="columns">
          <h4>Details</h4>
          </v-col>
          <v-col class="columns">
            <h5>Name:<span> {{ this.name }}</span> </h5>
          </v-col>
          <v-col class="columns">
            <h5>DNI:<span> {{ this.dni }}</span></h5>
          </v-col>
          <v-col class="columns">
            <h5>Phone: <span>{{ this.phone }}</span></h5>
          </v-col>
          <v-col class="columns">
            <h5>Type: <span>{{ this.type }}</span></h5>
          </v-col>
          <v-col class="columns" cols="">
            <h5>Email:<span> {{ this.email }}</span></h5>
          </v-col>
          <v-col class="columns">
            <v-card-actions v-if="this.currentUser === 0">
              <v-btn
                style="color: white; background-color: #ffc107"
                @click="onEdit"
                class="btn"
              >
                Edit Information
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <!--Final dibujar publicaciones-->

    <!--Inicio Formulario de publicacion-->
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title> User Profile </v-card-title>

          <div class="text-center">
            <v-menu open-on-hover top offset-y> </v-menu>
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
  }),
  methods: {
    retrieveUsers() {
      UsersService.getUsersById(UsersService.currentUser)
        .then((response) => {
          this.type = response.data.type;
          this.user = response.data.user;
          this.password = response.data.password;
          this.ruc = response.data.ruc;
          this.dni = response.data.dni;
          this.phone = response.data.phone;
          this.email = response.data.email;
          this.name = response.data.name;
          this.lastName = response.data.lastName;
          this.urlToImageBackground = response.data.urlToImageBackground;
          this.urlToImageProfile = response.data.urlToImageProfile;
          this.currentUser = UsersService.currentUser;
        })
        .catch((e) => {
          console.log(e);
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
      UsersService.updateUserById(UsersService.currentUser, {
        type: this.type,
        user: this._user,
        password: this._password,
        ruc: this.ruc,
        dni: this._dni,
        phone: this._phone,
        email: this._email,
        name: this._name,
        lastName: this._lastName,
        urlToImageBackground: this._urlToBackgroundImage,
        urlToImageProfile: this._urlToUserProfileImage,
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
    UsersService.currentUser = 0;
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
  padding: 0px;
  margin: 0px;

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
