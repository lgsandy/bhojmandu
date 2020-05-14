<template>
  <div class="home">

    <Header/>

    <!-- Image with Search Box -->
    
      <v-img :aspect-ratio="16/4" src="../assets/bhojmandu.png"> 

      <v-container>       
        <v-row class="white--text">
        <p class="display-2 white--text">Order Food Online</p>
      </v-row>
      <v-row>
        <p class="font-weight-regular white--text">"Best restaurants in Kathmandu delivering to your doorstep"</p>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3" md="3">
        <v-select
        prepend-inner-icon="location_on"
          :items="city_dropdown"
         label="Kathamndu"
         solo
         dense
        ></v-select>
      </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field background-color="#fff" dense label="Type delivery location here..." single-line outlined prepend-inner-icon="near_me" suffix="Hello thet n"></v-text-field>
                  
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="3">
          <v-btn color="green">Find Resturent </v-btn>                  
        </v-col>
      </v-row>
      </v-container>
      </v-img>
      
    <!-- End of Image with search Box -->

     <v-container class="mt-10">
      <v-row class="center" justify="center">
        <p class="display-2">Top Categories</p>
      </v-row>
     <v-row class="center" justify="center">
          <p class="title">Browse by Categories</p>
      </v-row>
    </v-container>

  <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="100%"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      multiple
      show-arrows
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot:default="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-4"
          height="250"
          width="210"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="80"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>

    <Restaurant/> 

    <Footer/>

  </div>
</template>

<script>

import Header from  "../components/header/header";
import Restaurant from "../components/restaurant/restaurant"
import Footer from "../components/footer/footer";

export default {

  components: { Header, Restaurant, Footer  },
  data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-instagram',
        'mdi-youtube',
      ],
      city_dropdown: ['Kathmandu', 'Bhaktapur', 'Lalitpur', 'Chitwan'],
      model: [],
    }),
  name: "Home",  
};
 
</script>