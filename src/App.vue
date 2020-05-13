<template>
  <v-app>
    <div v-if="getRouteName=='AdminDashboard' || getRouteName=='DriverDetails'">
      <Navbar />
    </div>
    <v-content class="ma-0">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar/Navbar";
export default {
  name: "App",

  components: {
    Navbar
  },
  computed: {
    getRouteName() {
      return this.$route.name;
    }
  },
  data: () => ({
    //
  })
};
</script>
