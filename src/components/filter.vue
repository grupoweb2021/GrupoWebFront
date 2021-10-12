<template>
  <div>
    <v-form>
      <v-container>
        <!--VERSION1 FAllIDA-->
        <!--v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="name"
              :disabled="isUpdating"
              filled
              color="blue-grey lighten-2"
              label="Breed"
            ></v-text-field>
          </v-col>
          
          <v-col>
            <v-autocomplete
              v-model="kind"
              :disabled="isUpdating"
              :items="kindanimals"
              filled
              chips
              color="blue-grey lighten-2"
              label="Select pet"
              item-text="name"
              item-value="name"
              multiple
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  close
                  @click="data.select"
                  @click:close="remove(data.item)"
                  @change="setvalues(data.item.name)"
                  v-model="extractdata"
                  
                >
                  {{ data.item.name }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-item-content v-text="data.item"></v-list-item-content>
                </template>
                <template v-else>
                  <v-list-item-content>
                    <v-list-item-title
                      v-html="data.item.name"
                    ></v-list-item-title>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
          </v-col>
          
          <v-col>
            <v-autocomplete
              v-model="gender"
              :disabled="isUpdating"
              :items="genderAnimal"
              filled
              chips
              color="blue-grey lighten-2"
              label="Select gender"
              item-text="name"
              item-value="name"
              multiple
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  close
                  @click="data.select"
                  @click:close="removeGender(data.item)"
                >
                  {{ data.item.name }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-item-content v-text="data.item"></v-list-item-content>
                </template>
                <template v-else>
                  <v-list-item-content>
                    <v-list-item-title
                      v-html="data.item.name"
                    ></v-list-item-title>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
          </v-col>

          <v-col>
            <v-btn color="primary" elevation="2" @click="showdata"
              >Filter</v-btn
            >
          </v-col>
        </v-row-->
        <v-row>
          <v-col>
            <h3>Kind of pet</h3>
            <v-select
              v-model="animalSelect"
              :items="kindanimals"
              :rules="[(v) => !!v || 'Item is required']"
              label="Choose"
              required
              @change="saveValues"
            ></v-select>
          </v-col>
          <v-col>
            <h3>Gender</h3>
            <v-select
              v-model="genderSelect"
              :items="genderAnimal"
              :rules="[(v) => !!v || 'Item is required']"
              label="Choose"
              required
              @change="saveValues"
            ></v-select>
          </v-col>
          <v-col>
            <h3>Require Attention</h3>
            <v-select
              v-model="requireSelect"
              :items="items"
              :rules="[(v) => !!v || 'Item is required']"
              label="Choose"
              required
              @change="saveValues"
            ></v-select>
          </v-col>
    
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import PetsService from "../core/services/pets.service";

export default {
  name: "filtergeneral",
  data: () => ({
    kindanimals: ["Cat", "Dog", "Parrot", "Turtle", "Rondent", "Others"],
    genderAnimal: ["Male", "Female"],
    items: ["Require", "Dont Require"],
    val:"dfsdf",
    autoUpdate: true,
    isUpdating: false,
    search: [],
    extractdata: "",
  }),
  methods: {
    showdata() {
      const object = this.kind;
      for (const property in object) {
        console.log(`${object[property]}`);
      }
    },
    saveValues() {
      PetsService.filterPet(this.animalSelect, this.genderSelect,this.requireSelect).then(
        (response) => {
          //console.log(this.animalSelect, this.genderSelect,this.requireSelect)

          PetsService.setdatafilter(response.data)

        }
      );
    },
  },
  mounted() {},
};
</script>

<style >
.select-wrapper {
  position: relative;
  width: 350px;
}
select-wrapper::after {
  color: black;
  content: "▾";
  margin-right: 10px;
  pointer-events: none;
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 20px;
}

.select {
  -moz-appearance: none;
  -webkit-appearance: none;
  background: white;
  border: none;
  border-radius: 0;
  cursor: pointer;
  padding: 12px;
  width: 100%;
  font-size: 18px;
}
select:focus {
  color: black;
}

select::-ms-expand {
  display: none;
}
</style>
