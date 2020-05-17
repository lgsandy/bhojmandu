<template>
  <div>
    <v-container class="mt-10">
      <v-row class="center" justify="center">
        <p class="display-2">Top Restaurants</p>
      </v-row>
      <v-row class="center" justify="center">
        <p class="title">Browse by your choice Restaurants</p>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="3" v-for="n in 8" :key="n">
          <v-card elevation="12" class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <v-img height="150" width="100%" src="../../assets/kfc.png"></v-img>
                <v-list-item-title class="headline mb-1">Restaurant Name</v-list-item-title>
                <v-list-item-subtitle
                  prepend-inner-icon="local_shipping"
                  class="font-weight-bold"
                >Delivery within 45 minutes.</v-list-item-subtitle>
                <v-list-item-subtitle>Delivery charge - 120</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>