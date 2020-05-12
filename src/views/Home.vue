<template>
  <div class="home">
    <v-app-bar color="#F05A00" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Bhojmandu</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-icon>restaurant_menu</v-icon>
      <v-btn text class="ma-1">Feels Like Eating</v-btn>
      <v-icon>location_on</v-icon>
      <v-btn text class="ma-1">Choose A Location</v-btn>
      <v-btn text class="ma-1">Login</v-btn>
      <v-menu left bottom></v-menu>
    </v-app-bar>

    <v-divider class="mx-4" horizontal></v-divider>
    <v-row align="center" justify="center">
      <v-img
        src="../assets/bhojmandu.png"
        aspect-ratio="1"
        class="grey lighten-2"
        max-width="100%"
        max-height="300"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-row>
    <v-container class="mt-10">
      <v-row class="center" justify="center">
        <v-text class="display-2">Now, We Are Accepting Order</v-text>
      </v-row>
      <v-row class="center mt-5" justify="center">
        <v-text class="title">"Taste Something Different"</v-text>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field outlined label="Resturant Name" prepend-inner-icon="restaurant_menu"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field outlined label="Restaurant Location" prepend-inner-icon="location_on"></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mt-10">
      <v-row class="center" justify="center">
        <v-text class="display-2">Top Restaurants we are Parter with !!!</v-text>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="4" v-for="n in 6" :key="n">
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Name of Restaurant</div>
                <v-list-item-title class="headline mb-1">Restaurant</v-list-item-title>
                <v-list-item-subtitle>Little description of Restaurant goes here.</v-list-item-subtitle>
              </v-list-item-content>

              <v-img
                height="100%"
                width="10"
                src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
              ></v-img>
            </v-list-item>

            <v-card-actions>
              <v-btn text>Link1</v-btn>
              <v-btn text>Link2</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">Get connected with us on social networks!</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          Copyright &copy; {{ new Date().getFullYear() }} —
          <strong>Bhojmandu. All Right Reserved.</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
