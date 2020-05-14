<template>
  <div >
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

    </div>
</template>
